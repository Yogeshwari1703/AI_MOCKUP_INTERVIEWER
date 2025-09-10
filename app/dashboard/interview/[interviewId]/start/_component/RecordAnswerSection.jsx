"use client";
import React,{useState,useEffect} from 'react'
import Webcam from 'react-webcam'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic,StopCircle } from "lucide-react"; 
import { toast } from "sonner";
import moment from "moment";
import { chatSession } from "@/utils/geminiAiModel.js";
import { useUser } from '@clerk/nextjs';
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";




function RecordAnswerSection( {mockInterviewQuestion,activeQuestionIndex ,interviewData}) {
  const {user}=useUser();
  const [userAnswer,setUserAnswer]=useState('');
  const [loading,setLoading]=useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });


  useEffect(() => {
  if (results.length > 0) {
    const transcript = results.map(r => r.transcript).join(" ");
    setUserAnswer(transcript);
  }
}, [results]);

useEffect(()=>{
  if(!isRecording&&userAnswer.length>10){
    UpdateUserAnswer();
  }
    // if(userAnswer?.length<10){
    //     setLoading(false);
    //     toast.error('Error while saving your answer , please record again')
    //     return ;
    //   }
},[userAnswer]);


const StartStopRecording =async () => {
  if (isRecording) {
     
      stopSpeechToText(); 
      
      
       await UpdateUserAnswer();


  } else {
    setUserAnswer(""); // clear old answer before new recording
    startSpeechToText();
  }
};

const UpdateUserAnswer=async()=>{

  console.log(userAnswer);
      setLoading(true);
      const feedbackPrompt="Question:"+mockInterviewQuestion[activeQuestionIndex]?.question+
      ",User Answer:"+userAnswer+
      ",Depends on question and user answer for given interview question "+
      " please give us rating out of 10(ex. 2/10) for answer and feedback as area of improvement if any"+
      " in just 3-5 lines to improve it in JSON format with rating field and feedback field"


      

      const result=await chatSession.sendMessage(feedbackPrompt);
      const mockJsonResp=(result.response.text().replace('```json', '').replace('```', ''))
      console.log(mockJsonResp);
      const JsonFeedbackResp=JSON.parse(mockJsonResp);

      const resp=await db.insert(UserAnswer)
      .values({
        mockIdRef:interviewData?.mockId,
        question:mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns:mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns:userAnswer,
        feedback:JsonFeedbackResp?.feedback,
        rating:JsonFeedbackResp?.rating,
        userEmail:user?.primaryEmailAddress?.emailAddress,
        createdAt:moment().format('DD-MM-YYYY')
        
      })

      if(resp){
        toast('User Answer recorded successfully')
        setUserAnswer('');
        setResults([]);
      }
       setResults([]);
      
      setLoading(false);
}



  return (
    <div className='flex flex-col items-center justify-center'>
    <div className="flex flex-col my-20 justify-center items-center bg-black rounded-lg p-5 relative ">
        <Image src={'/webcam.png'} alt="webcam" width={200} height={200} className="absolute"/>
      <Webcam 
        mirrored={true}
        style={{
        height:300,
        width:'100%',
        zIndex:10,
      }}
        />
    </div>
<Button  disabled={loading} variant="outline" className="my-10" onClick={StartStopRecording}>
  {isRecording ? (
    <h2 className='text-red-600 flex gap-2 items-center'>
      <StopCircle/> Stop Recording
    </h2>
  ) : (
    <h2 className='text-primary flex gap-2 items-center'>
      <Mic/> Record Answer
    </h2>
  )}
</Button>


    </div>
  )
}

export default RecordAnswerSection
