// "use client";
// import React,{useState,useEffect} from 'react'
// import Webcam from 'react-webcam'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import useSpeechToText from 'react-hook-speech-to-text';
// import { Mic,StopCircle } from "lucide-react"; 
// import { toast } from "sonner";
// import moment from "moment";
// import { chatSession } from "@/utils/geminiAiModel.js";
// import { useUser } from '@clerk/nextjs';
// import { db } from "@/utils/db";
// import { UserAnswer } from "@/utils/schema";




// function RecordAnswerSection( {mockInterviewQuestion,activeQuestionIndex ,interviewData}) {
//   const {user}=useUser();
//   const [userAnswer,setUserAnswer]=useState('');
//   const [loading,setLoading]=useState(false);
//   const {
//     error,
//     interimResult,
//     isRecording,
//     results,
//     startSpeechToText,
//     stopSpeechToText,
//     setResults
//   } = useSpeechToText({
//     continuous: true,
//     useLegacyResults: false
//   });


//   useEffect(() => {
//   if (results.length > 0) {
//     const transcript = results.map(r => r.transcript).join(" ");
//     setUserAnswer(transcript);
//   }
// }, [results]);

// useEffect(()=>{
//   if(!isRecording&&userAnswer.length>10){
//     UpdateUserAnswer();
//   }
//     // if(userAnswer?.length<10){
//     //     setLoading(false);
//     //     toast.error('Error while saving your answer , please record again')
//     //     return ;
//     //   }
// },[userAnswer]);


// const StartStopRecording =async () => {
//   if (isRecording) {
     
//       stopSpeechToText(); 
      
      
//        await UpdateUserAnswer();


//   } else {
//     setUserAnswer(""); // clear old answer before new recording
//     startSpeechToText();
//   }
// };

// const UpdateUserAnswer=async()=>{

//   console.log(userAnswer);
//       setLoading(true);
//       const feedbackPrompt="Question:"+mockInterviewQuestion[activeQuestionIndex]?.question+
//       ",User Answer:"+userAnswer+
//       ",Depends on question and user answer for given interview question "+
//       " please give us rating out of 10(ex. 2/10) for answer and feedback as area of improvement if any"+
//       " in just 3-5 lines to improve it in JSON format with rating field and feedback field"


      

//       const result=await chatSession.sendMessage(feedbackPrompt);
//       const mockJsonResp=(result.response.text().replace('```json', '').replace('```', ''))
//       console.log(mockJsonResp);
//       const JsonFeedbackResp=JSON.parse(mockJsonResp);

//       const resp=await db.insert(UserAnswer)
//       .values({
//         mockIdRef:interviewData?.mockId,
//         question:mockInterviewQuestion[activeQuestionIndex]?.question,
//         correctAns:mockInterviewQuestion[activeQuestionIndex]?.answer,
//         userAns:userAnswer,
//         feedback:JsonFeedbackResp?.feedback,
//         rating:JsonFeedbackResp?.rating,
//         userEmail:user?.primaryEmailAddress?.emailAddress,
//         createdAt:moment().format('DD-MM-YYYY')
        
//       })

//       if(resp){
//         toast('User Answer recorded successfully')
//         setUserAnswer('');
//         setResults([]);
//       }
//        setResults([]);
      
//       setLoading(false);
// }



//   return (
//     <div className='flex flex-col items-center justify-center'>
//     <div className="flex flex-col my-20 justify-center items-center bg-black rounded-lg p-5 relative ">
//         <Image src={'/webcam.png'} alt="webcam" width={200} height={200} className="absolute"/>
//       <Webcam 
//         mirrored={true}
//         style={{
//         height:300,
//         width:'100%',
//         zIndex:10,
//       }}
//         />
//     </div>
// <Button  disabled={loading} variant="outline" className="my-10" onClick={StartStopRecording}>
//   {isRecording ? (
//     <h2 className='text-red-600 flex gap-2 items-center'>
//       <StopCircle/> Stop Recording
//     </h2>
//   ) : (
//     <h2 className='text-primary flex gap-2 items-center'>
//       <Mic/> Record Answer
//     </h2>
//   )}
// </Button>


//     </div>
//   )
// }

// export default RecordAnswerSection




"use client";
import React,{useState,useEffect} from 'react'
import Webcam from 'react-webcam'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic,StopCircle, LoaderCircle } from "lucide-react"; 
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
        toast.success('✅ Answer recorded successfully!');
        setUserAnswer('');
        setResults([]);
      }
      setResults([]);
      setLoading(false);
}

  return (
    <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-xl flex items-center justify-center text-sm shadow-lg shadow-purple-500/30">
          <i className="fas fa-microphone"></i>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">Record Your Answer</h3>
          <p className="text-gray-400 text-sm">Speak clearly and confidently</p>
        </div>
      </div>

      {/* Webcam Section */}
      <div className="relative mb-6">
        <div className="relative bg-black rounded-2xl overflow-hidden aspect-video border-2 border-gray-600">
          <Webcam 
            mirrored={true}
            className="w-full h-full object-cover"
          />
          
          {/* Recording Indicator */}
          {isRecording && (
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500/90 text-white px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">RECORDING</span>
            </div>
          )}
          
          {/* Device Status */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/70 text-white px-3 py-1 rounded-full">
            <i className={`fas fa-microphone ${isRecording ? 'text-green-400' : 'text-gray-400'}`}></i>
            <span className="text-sm">{isRecording ? 'Microphone Active' : 'Microphone Ready'}</span>
          </div>
          
          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/70 text-white px-3 py-1 rounded-full">
            <i className="fas fa-video text-green-400"></i>
            <span className="text-sm">Camera Active</span>
          </div>
        </div>
      </div>

      {/* Transcription Preview */}
      {(userAnswer || interimResult) && (
        <div className="mb-6 bg-gray-700/50 rounded-xl p-4 border border-gray-600">
          <div className="flex items-center gap-2 mb-2">
            <i className="fas fa-text-height text-purple-400 text-sm"></i>
            <h4 className="text-white font-medium text-sm">Live Transcription</h4>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            {userAnswer || interimResult}
          </p>
          {interimResult && !userAnswer && (
            <div className="flex items-center gap-2 mt-2">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
              <span className="text-purple-400 text-xs">Listening...</span>
            </div>
          )}
        </div>
      )}

      {/* Recording Controls */}
      <div className="flex flex-col items-center gap-4">
        <Button 
          disabled={loading}
          onClick={StartStopRecording}
          className={`w-full max-w-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 ${
            isRecording 
              ? 'bg-red-500 text-white hover:bg-red-600 shadow-red-500/30' 
              : 'bg-gradient-to-r from-purple-500 to-teal-400 text-white shadow-purple-500/30 hover:shadow-xl'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <LoaderCircle className="w-4 h-4 animate-spin" />
              Processing Answer...
            </span>
          ) : isRecording ? (
            <span className="flex items-center gap-2">
              <StopCircle className="w-4 h-4" />
              Stop Recording & Save
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Mic className="w-4 h-4" />
              Start Recording Answer
            </span>
          )}
        </Button>

        {/* Tips */}
        <div className="text-center">
          <p className="text-gray-400 text-xs">
            {isRecording 
              ? "Speak clearly into your microphone. Click stop when finished."
              : "Click to start recording your answer. Speak clearly and confidently."
            }
          </p>
        </div>
      </div>

      {/* Status Information */}
      <div className="mt-6 p-4 bg-gray-700/30 rounded-lg border border-gray-600">
        <div className="flex items-center gap-3">
          <i className="fas fa-info-circle text-teal-400"></i>
          <div>
            <h4 className="text-teal-400 font-medium text-sm">AI Feedback</h4>
            <p className="text-gray-300 text-xs">
              Your answer will be analyzed by AI and you'll receive instant feedback with a rating.
            </p>
          </div>
        </div>
      </div>

      {/* Add Font Awesome CSS */}
      <style jsx>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
      `}</style>
    </div>
  )
}

export default RecordAnswerSection