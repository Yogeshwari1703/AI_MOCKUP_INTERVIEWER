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




// "use client";
// import React,{useState,useEffect} from 'react'
// import Webcam from 'react-webcam'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import useSpeechToText from 'react-hook-speech-to-text';
// import { Mic,StopCircle, LoaderCircle } from "lucide-react"; 
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
// },[userAnswer]);

// const StartStopRecording =async () => {
//   if (isRecording) {
//       stopSpeechToText(); 
//       await UpdateUserAnswer();
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
//         toast.success('✅ Answer recorded successfully!');
//         setUserAnswer('');
//         setResults([]);
//       }
//       setResults([]);
//       setLoading(false);
// }

//   return (
//     <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10">
//       {/* Header */}
//       <div className="flex items-center gap-3 mb-6">
//         <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-xl flex items-center justify-center text-sm shadow-lg shadow-purple-500/30">
//           <i className="fas fa-microphone"></i>
//         </div>
//         <div>
//           <h3 className="text-white font-semibold text-lg">Record Your Answer</h3>
//           <p className="text-gray-400 text-sm">Speak clearly and confidently</p>
//         </div>
//       </div>

//       {/* Webcam Section */}
//       <div className="relative mb-6">
//         <div className="relative bg-black rounded-2xl overflow-hidden aspect-video border-2 border-gray-600">
//           <Webcam 
//             mirrored={true}
//             className="w-full h-full object-cover"
//           />
          
//           {/* Recording Indicator */}
//           {isRecording && (
//             <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500/90 text-white px-3 py-1 rounded-full">
//               <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//               <span className="text-sm font-medium">RECORDING</span>
//             </div>
//           )}
          
//           {/* Device Status */}
//           <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/70 text-white px-3 py-1 rounded-full">
//             <i className={`fas fa-microphone ${isRecording ? 'text-green-400' : 'text-gray-400'}`}></i>
//             <span className="text-sm">{isRecording ? 'Microphone Active' : 'Microphone Ready'}</span>
//           </div>
          
//           <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/70 text-white px-3 py-1 rounded-full">
//             <i className="fas fa-video text-green-400"></i>
//             <span className="text-sm">Camera Active</span>
//           </div>
//         </div>
//       </div>

//       {/* Transcription Preview */}
//       {(userAnswer || interimResult) && (
//         <div className="mb-6 bg-gray-700/50 rounded-xl p-4 border border-gray-600">
//           <div className="flex items-center gap-2 mb-2">
//             <i className="fas fa-text-height text-purple-400 text-sm"></i>
//             <h4 className="text-white font-medium text-sm">Live Transcription</h4>
//           </div>
//           <p className="text-gray-300 text-sm leading-relaxed">
//             {userAnswer || interimResult}
//           </p>
//           {interimResult && !userAnswer && (
//             <div className="flex items-center gap-2 mt-2">
//               <div className="flex gap-1">
//                 <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
//                 <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
//                 <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
//               </div>
//               <span className="text-purple-400 text-xs">Listening...</span>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Recording Controls */}
//       <div className="flex flex-col items-center gap-4">
//         <Button 
//           disabled={loading}
//           onClick={StartStopRecording}
//           className={`w-full max-w-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 ${
//             isRecording 
//               ? 'bg-red-500 text-white hover:bg-red-600 shadow-red-500/30' 
//               : 'bg-gradient-to-r from-purple-500 to-teal-400 text-white shadow-purple-500/30 hover:shadow-xl'
//           } disabled:opacity-50 disabled:cursor-not-allowed`}
//         >
//           {loading ? (
//             <span className="flex items-center gap-2">
//               <LoaderCircle className="w-4 h-4 animate-spin" />
//               Processing Answer...
//             </span>
//           ) : isRecording ? (
//             <span className="flex items-center gap-2">
//               <StopCircle className="w-4 h-4" />
//               Stop Recording & Save
//             </span>
//           ) : (
//             <span className="flex items-center gap-2">
//               <Mic className="w-4 h-4" />
//               Start Recording Answer
//             </span>
//           )}
//         </Button>

//         {/* Tips */}
//         <div className="text-center">
//           <p className="text-gray-400 text-xs">
//             {isRecording 
//               ? "Speak clearly into your microphone. Click stop when finished."
//               : "Click to start recording your answer. Speak clearly and confidently."
//             }
//           </p>
//         </div>
//       </div>

//       {/* Status Information */}
//       <div className="mt-6 p-4 bg-gray-700/30 rounded-lg border border-gray-600">
//         <div className="flex items-center gap-3">
//           <i className="fas fa-info-circle text-teal-400"></i>
//           <div>
//             <h4 className="text-teal-400 font-medium text-sm">AI Feedback</h4>
//             <p className="text-gray-300 text-xs">
//               Your answer will be analyzed by AI and you'll receive instant feedback with a rating.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Add Font Awesome CSS */}
//       <style jsx>{`
//         @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
//       `}</style>
//     </div>
//   )
// }

// export default RecordAnswerSection








"use client";
import React, { useState, useEffect, useRef } from 'react'
import Webcam from 'react-webcam'
import { Button } from '@/components/ui/button'
import { Mic, StopCircle, LoaderCircle, AlertCircle } from "lucide-react"; 
import { toast } from "sonner";
import moment from "moment";
import { chatSession } from "@/utils/geminiAiModel.js";
import { useUser } from '@clerk/nextjs';
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";

function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
  const { user } = useUser();
  const [userAnswer, setUserAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [interimResult, setInterimResult] = useState('');
  const [speechSupported, setSpeechSupported] = useState(true);
  const [speechError, setSpeechError] = useState(null);
  const recognitionRef = useRef(null);
  const retryCountRef = useRef(0);
  const maxRetries = 2;
  const isStartingRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setSpeechSupported(false);
      setSpeechError('Speech recognition not supported in this browser');
      return;
    }

    try {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onstart = () => {
        console.log('Speech recognition started');
        setSpeechError(null);
        retryCountRef.current = 0;
        isStartingRef.current = false;
      };

      recognitionRef.current.onresult = (event) => {
        let finalTranscript = '';
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }

        if (finalTranscript) {
          setUserAnswer(prev => (prev + finalTranscript).trim());
          retryCountRef.current = 0;
        }
        setInterimResult(interimTranscript);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        switch (event.error) {
          case 'no-speech':
            console.log('No speech detected - this is normal during silence');
            setSpeechError(null);
            break;
          case 'network':
            setSpeechError('Network error: Please check your internet connection');
            toast.error('Network error: Check your internet connection');
            break;
          case 'not-allowed':
          case 'permission-denied':
            setSpeechError('Microphone permission denied. Please allow microphone access.');
            toast.error('Microphone access denied.');
            break;
          case 'audio-capture':
            setSpeechError('No microphone found.');
            toast.error('No microphone detected.');
            break;
          default:
            if (!['aborted', 'no-speech'].includes(event.error)) {
              setSpeechError(`Speech recognition error: ${event.error}`);
            }
        }

        setIsRecording(false);
        isStartingRef.current = false;
      };

      recognitionRef.current.onend = () => {
        console.log('Speech recognition ended');
        isStartingRef.current = false;
        if (isRecording && !speechError && retryCountRef.current < maxRetries) {
          setTimeout(() => {
            if (isRecording && !isStartingRef.current) {
              startSpeechToText();
            }
          }, 1000);
        } else {
          setIsRecording(false);
        }
      };

    } catch (error) {
      console.error('Failed to initialize speech recognition:', error);
      setSpeechSupported(false);
      setSpeechError('Failed to initialize speech recognition');
    }

    return () => {
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch (e) {}
      }
    };
  }, []);

  const startSpeechToText = async () => {
    if (isStartingRef.current) return;
    if (recognitionRef.current && isRecording) return;

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      setSpeechError('Microphone access denied.');
      toast.error('Microphone access denied.');
      return;
    }

    if (recognitionRef.current) {
      try {
        isStartingRef.current = true;
        setUserAnswer('');
        setInterimResult('');
        setSpeechError(null);
        recognitionRef.current.stop();

        setTimeout(() => {
          if (recognitionRef.current && !isRecording) {
            recognitionRef.current.start();
            setIsRecording(true);
            toast.info("🎤 Recording started... Speak now!");
          }
        }, 100);
        
      } catch (error) {
        console.error('Failed to start speech recognition:', error);
        setSpeechError('Failed to start recording');
        toast.error("Failed to start recording");
        isStartingRef.current = false;
        setIsRecording(false);
      }
    }
  };

  const stopSpeechToText = () => {
    if (recognitionRef.current) {
      try {
        isStartingRef.current = false;
        recognitionRef.current.stop();
        setIsRecording(false);
        setTimeout(() => {
          const finalAnswer = (userAnswer + ' ' + interimResult).trim();
          if (finalAnswer.length >= 5) {
            processUserAnswer(finalAnswer);
          } else if (finalAnswer.length > 0) {
            toast.error("Please provide a longer answer");
          }
        }, 500);
      } catch {
        setIsRecording(false);
      }
    }
  };

  const safeStopRecording = () => {
    if (recognitionRef.current) {
      try { recognitionRef.current.abort(); } catch (e) {}
    }
    setIsRecording(false);
    isStartingRef.current = false;
  };

  const processUserAnswer = async (answerToProcess = userAnswer) => {
    if (!answerToProcess || answerToProcess.trim().length < 5) {
      toast.error("Answer too short");
      return;
    }

    setLoading(true);

    try {
      const currentQuestion = mockInterviewQuestion[activeQuestionIndex];
      if (!currentQuestion) return;

      const feedbackPrompt = `
        Question: ${currentQuestion.question}
        User's Answer: ${answerToProcess}
        
        Provide:
        {
          "rating": "X/10",
          "feedback": "Few lines of feedback"
        }
      `;

      const result = await chatSession.sendMessage(feedbackPrompt);
      const responseText = result.response.text();
      const cleanJson = responseText.replace(/```json|```/g, '').trim();
      const JsonFeedbackResp = JSON.parse(cleanJson);

      await db.insert(UserAnswer).values({
        mockIdRef: interviewData?.mockId,
        question: currentQuestion.question,
        correctAns: currentQuestion.answer || "N/A",
        userAns: answerToProcess,
        feedback: JsonFeedbackResp?.feedback || "No feedback",
        rating: JsonFeedbackResp?.rating || "0/10",
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-YYYY')
      });

      toast.success('✅ Answer saved!');
      setUserAnswer('');
      setInterimResult('');
    } catch (error) {
      console.error('Error processing answer:', error);
      toast.error('Error while saving answer.');
    } finally {
      setLoading(false);
    }
  };

  const handleStartStopRecording = () => {
    if (isRecording) stopSpeechToText();
    else startSpeechToText();
  };

  useEffect(() => {
    safeStopRecording();
    setUserAnswer('');
    setInterimResult('');
    setSpeechError(null);
  }, [activeQuestionIndex]);

  if (!speechSupported) {
    return (
      <div className="bg-red-500/10 border border-red-500 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">Browser Not Supported</h3>
            <p className="text-red-300 text-sm">{speechError}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-gradient-to-br from-purple-500 to-teal-400'} text-white rounded-xl flex items-center justify-center`}>
          <Mic className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">Record Your Answer</h3>
          <p className="text-gray-400 text-sm">
            {isRecording ? "🎤 Recording... Speak now!" : "Click to start recording"}
          </p>
        </div>
      </div>

      <div className="relative mb-6">
        <div className="relative bg-black rounded-2xl overflow-hidden aspect-video border-2 border-gray-600">
          <Webcam mirrored className="w-full h-full object-cover" audio={false} />
          {isRecording && (
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500/90 text-white px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">RECORDING</span>
            </div>
          )}
        </div>
      </div>

      <div className="mb-6 bg-gray-700/50 rounded-xl p-4 border border-gray-600 min-h-[120px]">
        <h4 className="text-white font-medium text-sm mb-2">
          {isRecording ? 'Live Transcription' : 'Your Answer'}
        </h4>
        <div>
          {loading ? (
            <div className="flex items-center justify-center h-16">
              <LoaderCircle className="w-6 h-6 animate-spin text-purple-400 mr-2" />
              <span className="text-purple-400">Processing your answer...</span>
            </div>
          ) : userAnswer || interimResult ? (
            <p className="text-white text-sm bg-purple-500/10 p-3 rounded-lg border border-purple-500/30">
              {userAnswer || interimResult}
            </p>
          ) : (
            <p className="text-gray-400 text-sm italic">Your answer will appear here...</p>
          )}
        </div>
      </div>

      <Button 
        disabled={loading}
        onClick={handleStartStopRecording}
        className={`w-full font-semibold ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-gradient-to-r from-purple-500 to-teal-400 hover:opacity-90'} text-white`}
      >
        {loading ? (
          <>
            <LoaderCircle className="w-4 h-4 animate-spin mr-2" /> Processing...
          </>
        ) : isRecording ? (
          <>
            <StopCircle className="w-4 h-4 mr-2" /> Stop Recording & Save
          </>
        ) : (
          <>
            <Mic className="w-4 h-4 mr-2" /> Start Recording
          </>
        )}
      </Button>
    </div>
  );
}

export default RecordAnswerSection;
