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


// "use client";
// import React, { useState, useEffect } from 'react'
// import Webcam from 'react-webcam'
// import { Button } from '@/components/ui/button'
// import useSpeechToText from 'react-hook-speech-to-text';
// import { Mic, StopCircle, LoaderCircle } from "lucide-react"; 
// import { toast } from "sonner";
// import moment from "moment";
// import { chatSession } from "@/utils/geminiAiModel.js";
// import { useUser } from '@clerk/nextjs';
// import { db } from "@/utils/db";
// import { UserAnswer } from "@/utils/schema";

// function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
//   const { user } = useUser();
//   const [userAnswer, setUserAnswer] = useState('');
//   const [loading, setLoading] = useState(false);
  
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
//     useLegacyResults: false,
//     crossBrowser: true,
//     timeout: 10000, // 10 seconds timeout
//     speechRecognitionProperties: {
//       lang: 'en-US',
//       interimResults: true,
//       continuous: true,
//     }
//   });

//   // Debug logging
//   useEffect(() => {
//     console.log('Recording state:', isRecording);
//     console.log('Results:', results);
//     console.log('Error:', error);
//   }, [isRecording, results, error]);

//   // Update user answer when results change
//   useEffect(() => {
//     if (results.length > 0) {
//       const transcript = results.map(r => r.transcript).join(" ");
//       console.log('New transcript:', transcript);
//       setUserAnswer(transcript);
//     }
//   }, [results]);

//   // Handle recording stop and processing
//   useEffect(() => {
//     if (!isRecording && userAnswer && userAnswer.length > 10) {
//       console.log('Recording stopped, processing answer...');
//       UpdateUserAnswer();
//     }
//   }, [isRecording, userAnswer]);

//   const StartStopRecording = async () => {
//     console.log('StartStopRecording called, current state:', isRecording);
    
//     try {
//       if (isRecording) {
//         console.log('Stopping recording...');
//         await stopSpeechToText();
//         // Don't call UpdateUserAnswer here - let the useEffect handle it
//       } else {
//         console.log('Starting recording...');
//         setUserAnswer(""); // Clear old answer
//         setResults([]); // Clear previous results
//         await startSpeechToText();
//       }
//     } catch (error) {
//       console.error('Recording error:', error);
//       toast.error('Failed to control recording');
//     }
//   };

//   const UpdateUserAnswer = async () => {
//     if (!userAnswer || userAnswer.trim().length < 10) {
//       toast.error('Please provide a longer answer');
//       return;
//     }

//     setLoading(true);
//     console.log('Processing answer:', userAnswer);

//     try {
//       const feedbackPrompt = `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}
//       User Answer: ${userAnswer}
//       Please evaluate this answer and provide:
//       1. A rating out of 10 (format: "X/10")
//       2. Brief feedback (3-5 lines) with areas for improvement
      
//       Return in JSON format with "rating" and "feedback" fields.`;

//       const result = await chatSession.sendMessage(feedbackPrompt);
//       const responseText = result.response.text();
//       console.log('Raw AI response:', responseText);
      
//       // Clean the response
//       const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
//       console.log('Cleaned JSON:', cleanJson);
      
//       const JsonFeedbackResp = JSON.parse(cleanJson);

//       // Save to database
//       const resp = await db.insert(UserAnswer).values({
//         mockIdRef: interviewData?.mockId,
//         question: mockInterviewQuestion[activeQuestionIndex]?.question,
//         correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
//         userAns: userAnswer,
//         feedback: JsonFeedbackResp?.feedback,
//         rating: JsonFeedbackResp?.rating,
//         userEmail: user?.primaryEmailAddress?.emailAddress,
//         createdAt: moment().format('DD-MM-YYYY')
//       });

//       if (resp) {
//         toast.success('✅ Answer recorded successfully!');
//         setUserAnswer('');
//         setResults([]);
//       }
//     } catch (error) {
//       console.error('Error processing answer:', error);
//       toast.error('Failed to process answer');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Display errors if any
//   if (error) {
//     console.error('Speech recognition error:', error);
//     return (
//       <div className="bg-red-500/10 border border-red-500 rounded-2xl p-6">
//         <p className="text-red-500">Microphone Error: {error.toString()}</p>
//         <Button 
//           onClick={() => window.location.reload()}
//           className="mt-4"
//         >
//           Reload Page
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10">
//       {/* Header */}
//       <div className="flex items-center gap-3 mb-6">
//         <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-xl flex items-center justify-center text-sm shadow-lg shadow-purple-500/30">
//           <Mic className="w-5 h-5" />
//         </div>
//         <div>
//           <h3 className="text-white font-semibold text-lg">Record Your Answer</h3>
//           <p className="text-gray-400 text-sm">
//             {isRecording ? "Recording... Speak now" : "Click to start recording"}
//           </p>
//         </div>
//       </div>

//       {/* Webcam Section */}
//       <div className="relative mb-6">
//         <div className="relative bg-black rounded-2xl overflow-hidden aspect-video border-2 border-gray-600">
//           <Webcam 
//             mirrored={true}
//             className="w-full h-full object-cover"
//             audio={false}
//           />
          
//           {/* Recording Indicator */}
//           {isRecording && (
//             <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500/90 text-white px-3 py-1 rounded-full">
//               <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//               <span className="text-sm font-medium">RECORDING</span>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Transcription Preview */}
//       <div className="mb-6 bg-gray-700/50 rounded-xl p-4 border border-gray-600 min-h-[120px]">
//         <div className="flex items-center gap-2 mb-2">
//           <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
//           <h4 className="text-white font-medium text-sm">Live Transcription</h4>
//         </div>
//         <p className="text-gray-300 text-sm leading-relaxed">
//           {userAnswer || interimResult || (isRecording ? "Listening..." : "Your transcription will appear here...")}
//         </p>
//         {interimResult && !userAnswer && isRecording && (
//           <div className="flex items-center gap-2 mt-2">
//             <div className="flex gap-1">
//               <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
//               <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
//               <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
//             </div>
//             <span className="text-purple-400 text-xs">Processing speech...</span>
//           </div>
//         )}
//       </div>

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
//               Stop Recording
//             </span>
//           ) : (
//             <span className="flex items-center gap-2">
//               <Mic className="w-4 h-4" />
//               Start Recording
//             </span>
//           )}
//         </Button>

//         {/* Tips */}
//         <div className="text-center">
//           <p className="text-gray-400 text-xs">
//             {isRecording 
//               ? "Speak clearly into your microphone. Click stop when finished."
//               : "Ensure microphone permissions are granted. Click to start recording."
//             }
//           </p>
//         </div>
//       </div>

//       {/* Debug Info (remove in production) */}
//       <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
//         <p className="text-xs text-gray-400">
//           Debug: Recording: {isRecording ? 'Yes' : 'No'}, 
//           Results: {results.length}, 
//           Answer length: {userAnswer.length}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default RecordAnswerSection;

// "use client";
// import React, { useState, useEffect, useRef } from 'react'
// import Webcam from 'react-webcam'
// import { Button } from '@/components/ui/button'
// import { Mic, StopCircle, LoaderCircle, AlertCircle } from "lucide-react"; 
// import { toast } from "sonner";
// import moment from "moment";
// import { useUser } from '@clerk/nextjs';
// import { db } from "@/utils/db";
// import { UserAnswer } from "@/utils/schema";

// function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
//   const { user } = useUser();
//   const [userAnswer, setUserAnswer] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);
//   const [interimResult, setInterimResult] = useState('');
//   const [speechSupported, setSpeechSupported] = useState(true);
//   const [speechError, setSpeechError] = useState(null);
//   const recognitionRef = useRef(null);
//   const retryCountRef = useRef(0);
//   const maxRetries = 2;
//   const isStartingRef = useRef(false);

//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
//     if (!SpeechRecognition) {
//       setSpeechSupported(false);
//       setSpeechError('Speech recognition not supported in this browser');
//       return;
//     }

//     try {
//       recognitionRef.current = new SpeechRecognition();
//       recognitionRef.current.continuous = true;
//       recognitionRef.current.interimResults = true;
//       recognitionRef.current.lang = 'en-US';

//       recognitionRef.current.onstart = () => {
//         console.log('Speech recognition started');
//         setSpeechError(null);
//         retryCountRef.current = 0;
//         isStartingRef.current = false;
//       };

//       recognitionRef.current.onresult = (event) => {
//         let finalTranscript = '';
//         let interimTranscript = '';

//         for (let i = event.resultIndex; i < event.results.length; i++) {
//           const transcript = event.results[i][0].transcript;
//           if (event.results[i].isFinal) {
//             finalTranscript += transcript + ' ';
//           } else {
//             interimTranscript += transcript;
//           }
//         }

//         if (finalTranscript) {
//           setUserAnswer(prev => (prev + finalTranscript).trim());
//           retryCountRef.current = 0;
//         }
//         setInterimResult(interimTranscript);
//       };

//       recognitionRef.current.onerror = (event) => {
//         console.error('Speech recognition error:', event.error);
//         switch (event.error) {
//           case 'no-speech':
//             console.log('No speech detected - this is normal during silence');
//             setSpeechError(null);
//             break;
//           case 'network':
//             setSpeechError('Network error: Please check your internet connection');
//             toast.error('Network error: Check your internet connection');
//             break;
//           case 'not-allowed':
//           case 'permission-denied':
//             setSpeechError('Microphone permission denied. Please allow microphone access.');
//             toast.error('Microphone access denied.');
//             break;
//           case 'audio-capture':
//             setSpeechError('No microphone found.');
//             toast.error('No microphone detected.');
//             break;
//           default:
//             if (!['aborted', 'no-speech'].includes(event.error)) {
//               setSpeechError(`Speech recognition error: ${event.error}`);
//             }
//         }

//         setIsRecording(false);
//         isStartingRef.current = false;
//       };

//       recognitionRef.current.onend = () => {
//         console.log('Speech recognition ended');
//         isStartingRef.current = false;
//         if (isRecording && !speechError && retryCountRef.current < maxRetries) {
//           setTimeout(() => {
//             if (isRecording && !isStartingRef.current) {
//               startSpeechToText();
//             }
//           }, 1000);
//         } else {
//           setIsRecording(false);
//         }
//       };

//     } catch (error) {
//       console.error('Failed to initialize speech recognition:', error);
//       setSpeechSupported(false);
//       setSpeechError('Failed to initialize speech recognition');
//     }

//     return () => {
//       if (recognitionRef.current) {
//         try { recognitionRef.current.stop(); } catch (e) {}
//       }
//     };
//   }, []);

//   const startSpeechToText = async () => {
//     if (isStartingRef.current) return;
//     if (recognitionRef.current && isRecording) return;

//     try {
//       await navigator.mediaDevices.getUserMedia({ audio: true });
//     } catch {
//       setSpeechError('Microphone access denied.');
//       toast.error('Microphone access denied.');
//       return;
//     }

//     if (recognitionRef.current) {
//       try {
//         isStartingRef.current = true;
//         setUserAnswer('');
//         setInterimResult('');
//         setSpeechError(null);
        
//         try {
//           recognitionRef.current.stop();
//         } catch (e) {}

//         setTimeout(() => {
//           if (recognitionRef.current && !isRecording) {
//             recognitionRef.current.start();
//             setIsRecording(true);
//             toast.info("🎤 Recording started... Speak now!");
//           }
//         }, 100);
        
//       } catch (error) {
//         console.error('Failed to start speech recognition:', error);
//         setSpeechError('Failed to start recording');
//         toast.error("Failed to start recording");
//         isStartingRef.current = false;
//         setIsRecording(false);
//       }
//     }
//   };

//   const stopSpeechToText = () => {
//     if (recognitionRef.current) {
//       try {
//         isStartingRef.current = false;
//         recognitionRef.current.stop();
//         setIsRecording(false);
        
//         setTimeout(() => {
//           const finalAnswer = (userAnswer + ' ' + interimResult).trim();
//           console.log('🔄 Final answer ready for saving:', finalAnswer);
          
//           if (finalAnswer.length >= 5) {
//             processUserAnswer(finalAnswer);
//           } else if (finalAnswer.length > 0) {
//             toast.error("Please provide a longer answer (minimum 5 characters)");
//           } else {
//             toast.error("No answer recorded. Please try again.");
//           }
//         }, 800);
//       } catch {
//         setIsRecording(false);
//       }
//     }
//   };

//   const processUserAnswer = async (answerToProcess) => {
//     console.log('🚀 Starting to save answer to database:', answerToProcess);
    
//     if (!answerToProcess || answerToProcess.trim().length < 5) {
//       toast.error("Please provide a longer answer");
//       return;
//     }

//     setLoading(true);

//     try {
//       const currentQuestion = mockInterviewQuestion[activeQuestionIndex];
      
//       if (!currentQuestion) {
//         toast.error("No question found");
//         return;
//       }

//       console.log('💾 Preparing database data...');
      
//       // Prepare data for database
//       const dbData = {
//         mockIdRef: interviewData?.mockId,
//         question: currentQuestion.question,
//         correctAns: currentQuestion.answer || "No correct answer provided",
//         userAns: answerToProcess,
//         feedback: "AI feedback & improvements temporarily disabled ",
//         rating: "Pending review",
//         userEmail: user?.primaryEmailAddress?.emailAddress,
//         createdAt: moment().format('DD-MM-YYYY')
//       };

//       console.log('📦 Database data:', dbData);

//       // Save to database - SIMPLE VERSION WITHOUT AI
//       try {
//         console.log('💫 Attempting database insert...');
//         const result = await db.insert(UserAnswer).values(dbData);
//         console.log('✅ Database insert result:', result);
        
//         toast.success('✅ Answer saved successfully!');
//         setUserAnswer('');
//         setInterimResult('');
        
//       } catch (dbError) {
//         console.error('❌ Database error:', dbError);
//         throw new Error(`Database failed: ${dbError.message}`);
//       }

//     } catch (error) {
//       console.error('❌ Error saving answer:', error);
//       toast.error('Failed to save answer. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStartStopRecording = () => {
//     if (isRecording) stopSpeechToText();
//     else startSpeechToText();
//   };

//   // Reset when question changes
//   useEffect(() => {
//     if (recognitionRef.current) {
//       try { recognitionRef.current.stop(); } catch (e) {}
//     }
//     setIsRecording(false);
//     isStartingRef.current = false;
//     setUserAnswer('');
//     setInterimResult('');
//     setSpeechError(null);
//   }, [activeQuestionIndex]);

//   if (!speechSupported) {
//     return (
//       <div className="bg-red-500/10 border border-red-500 rounded-2xl p-6">
//         <div className="flex items-center gap-3 mb-4">
//           <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center">
//             <AlertCircle className="w-5 h-5" />
//           </div>
//           <div>
//             <h3 className="text-white font-semibold text-lg">Browser Not Supported</h3>
//             <p className="text-red-300 text-sm">{speechError}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg">
//       <div className="flex items-center gap-3 mb-6">
//         <div className={`w-10 h-10 ${
//           isRecording ? 'bg-red-500 animate-pulse' : 'bg-gradient-to-br from-purple-500 to-teal-400'
//         } text-white rounded-xl flex items-center justify-center`}>
//           <Mic className="w-5 h-5" />
//         </div>
//         <div>
//           <h3 className="text-white font-semibold text-lg">Record Your Answer</h3>
//           <p className="text-gray-400 text-sm">
//             {isRecording ? "🎤 Recording... Speak now!" : "Click to start recording"}
//           </p>
//         </div>
//       </div>

//       <div className="relative mb-6">
//         <div className="relative bg-black rounded-2xl overflow-hidden aspect-video border-2 border-gray-600">
//           <Webcam mirrored className="w-full h-full object-cover" audio={false} />
//           {isRecording && (
//             <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500/90 text-white px-3 py-1 rounded-full">
//               <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//               <span className="text-sm font-medium">RECORDING</span>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Debug Info */}
      

//       <div className="mb-6 bg-gray-700/50 rounded-xl p-4 border border-gray-600 min-h-[120px]">
//         <h4 className="text-white font-medium text-sm mb-2">
//           {isRecording ? 'Live Transcription' : 'Your Answer'}
//         </h4>
//         <div>
//           {loading ? (
//             <div className="flex items-center justify-center h-16">
//               <LoaderCircle className="w-6 h-6 animate-spin text-purple-400 mr-2" />
//               <span className="text-purple-400">Saving your answer...</span>
//             </div>
//           ) : userAnswer || interimResult ? (
//             <p className="text-white text-sm bg-purple-500/10 p-3 rounded-lg border border-purple-500/30">
//               {userAnswer || interimResult}
//             </p>
//           ) : (
//             <p className="text-gray-400 text-sm italic">Your answer will appear here...</p>
//           )}
//         </div>
//       </div>

//       <Button 
//         disabled={loading}
//         onClick={handleStartStopRecording}
//         className={`w-full font-semibold ${
//           isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-gradient-to-r from-purple-500 to-teal-400 hover:opacity-90'
//         } text-white transition-all duration-300`}
//       >
//         {loading ? (
//           <>
//             <LoaderCircle className="w-4 h-4 animate-spin mr-2" /> Saving Answer...
//           </>
//         ) : isRecording ? (
//           <>
//             <StopCircle className="w-4 h-4 mr-2" /> Stop Recording & Save
//           </>
//         ) : (
//           <>
//             <Mic className="w-4 h-4 mr-2" /> Start Recording
//           </>
//         )}
//       </Button>

//       {/* Success Message Area */}
//       {!loading && userAnswer.length > 0 && !isRecording && (
//         <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
//           <p className="text-green-400 text-sm">
//             ✅ Answer ready to save! Click "Stop Recording & Save" above.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default RecordAnswerSection;




// "use client";
// import React, { useState, useEffect, useRef } from 'react'
// import Webcam from 'react-webcam'
// import { Button } from '@/components/ui/button'
// import { Mic, StopCircle, LoaderCircle, AlertCircle } from "lucide-react"; 
// import { toast } from "sonner";
// import moment from "moment";
// import { useUser } from '@clerk/nextjs';
// import { db } from "@/utils/db";
// import { UserAnswer } from "@/utils/schema";

// // Import the working AI function
// import { getAIResponse } from "@/utils/geminiAiModel.js";

// function RecordAnswerSection({ mockInterviewQuestion, activeQuestionIndex, interviewData }) {
//   const { user } = useUser();
//   const [userAnswer, setUserAnswer] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [isRecording, setIsRecording] = useState(false);
//   const [interimResult, setInterimResult] = useState('');
//   const [speechSupported, setSpeechSupported] = useState(true);
//   const [speechError, setSpeechError] = useState(null);
//   const recognitionRef = useRef(null);

//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
//     if (!SpeechRecognition) {
//       setSpeechSupported(false);
//       setSpeechError('Speech recognition not supported in this browser');
//       return;
//     }

//     try {
//       recognitionRef.current = new SpeechRecognition();
//       recognitionRef.current.continuous = true;
//       recognitionRef.current.interimResults = true;
//       recognitionRef.current.lang = 'en-US';

//       recognitionRef.current.onstart = () => {
//         setSpeechError(null);
//       };

//       recognitionRef.current.onresult = (event) => {
//         let finalTranscript = '';
//         let interimTranscript = '';

//         for (let i = event.resultIndex; i < event.results.length; i++) {
//           const transcript = event.results[i][0].transcript;
//           if (event.results[i].isFinal) {
//             finalTranscript += transcript + ' ';
//           } else {
//             interimTranscript += transcript;
//           }
//         }

//         if (finalTranscript) {
//           setUserAnswer(prev => (prev + finalTranscript).trim());
//         }
//         setInterimResult(interimTranscript);
//       };

//       recognitionRef.current.onerror = (event) => {
//         console.error('Speech recognition error:', event.error);
//         if (event.error === 'not-allowed' || event.error === 'permission-denied') {
//           setSpeechError('Microphone permission denied');
//           toast.error('Microphone access denied.');
//         }
//         setIsRecording(false);
//       };

//       recognitionRef.current.onend = () => {
//         setIsRecording(false);
//       };

//     } catch (error) {
//       console.error('Failed to initialize speech recognition:', error);
//       setSpeechSupported(false);
//       setSpeechError('Failed to initialize speech recognition');
//     }

//     return () => {
//       if (recognitionRef.current) {
//         try { recognitionRef.current.stop(); } catch (e) {}
//       }
//     };
//   }, []);

//   const startSpeechToText = async () => {
//     try {
//       await navigator.mediaDevices.getUserMedia({ audio: true });
//     } catch {
//       setSpeechError('Microphone access denied.');
//       toast.error('Microphone access denied.');
//       return;
//     }

//     if (recognitionRef.current) {
//       try {
//         setUserAnswer('');
//         setInterimResult('');
//         setSpeechError(null);
//         recognitionRef.current.start();
//         setIsRecording(true);
//         toast.info("🎤 Recording started... Speak now!");
//       } catch (error) {
//         console.error('Failed to start speech recognition:', error);
//         toast.error("Failed to start recording");
//         setIsRecording(false);
//       }
//     }
//   };

//   const stopSpeechToText = () => {
//     if (recognitionRef.current) {
//       recognitionRef.current.stop();
//       setIsRecording(false);
      
//       setTimeout(() => {
//         const finalAnswer = (userAnswer + ' ' + interimResult).trim();
//         if (finalAnswer.length >= 10) {
//           processUserAnswer(finalAnswer);
//         } else if (finalAnswer.length > 0) {
//           toast.error("Please provide a longer answer (minimum 10 characters)");
//         }
//       }, 500);
//     }
//   };

//   const processUserAnswer = async (answerToProcess) => {
//     if (!answerToProcess || answerToProcess.trim().length < 10) {
//       toast.error("Please provide a longer answer");
//       return;
//     }

//     setLoading(true);

//     try {
//       const currentQuestion = mockInterviewQuestion[activeQuestionIndex];
      
//       if (!currentQuestion) {
//         toast.error("No question found");
//         return;
//       }

//       let aiFeedback = "AI feedback service currently unavailable";
//       let aiRating = "Not rated";

//       // Get AI Feedback with better error handling
//       try {
//         const feedbackPrompt = `
//           You are an experienced interview coach. Please evaluate this interview answer.

//           QUESTION: "${currentQuestion.question}"
          
//           USER'S ANSWER: "${answerToProcess}"
          
//           Please provide:
//           1. A rating out of 10 (format like "7/10")
//           2. Constructive feedback in 3-5 lines with specific areas for improvement
          
//           Return your response in this exact JSON format:
//           {
//             "rating": "X/10",
//             "feedback": "Your detailed feedback here..."
//           }
//         `;

//         console.log('🤖 Getting AI feedback...');
//         const aiResponse = await getAIResponse(feedbackPrompt);
//         console.log('✅ AI Response received');

//         // Parse the response
//         try {
//           const cleaned = aiResponse.replace(/```json/g, '').replace(/```/g, '').trim();
//           const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
//           if (jsonMatch) {
//             const parsed = JSON.parse(jsonMatch[0]);
//             aiFeedback = parsed.feedback || "Feedback generated successfully";
//             aiRating = parsed.rating || "Not rated";
//             console.log('✅ AI Feedback parsed successfully');
//           } else {
//             aiFeedback = aiResponse;
//             aiRating = "Feedback provided";
//           }
//         } catch (parseError) {
//           console.log('⚠️ Using raw AI response');
//           aiFeedback = aiResponse.substring(0, 500);
//           aiRating = "Response received";
//         }

//       } catch (aiError) {
//         console.error('❌ AI service failed:', aiError.message);
//         aiFeedback = `AI feedback unavailable: ${aiError.message}. Your answer has been saved.`;
//         aiRating = "Service unavailable";
//         toast.warning("AI service issue, but answer saved successfully");
//       }

//       // Save to database
//       const dbData = {
//         mockIdRef: interviewData?.mockId,
//         question: currentQuestion.question,
//         correctAns: currentQuestion.answer || "No correct answer provided",
//         userAns: answerToProcess,
//         feedback: aiFeedback,
//         rating: aiRating,
//         userEmail: user?.primaryEmailAddress?.emailAddress,
//         createdAt: moment().format('DD-MM-YYYY')
//       };

//       await db.insert(UserAnswer).values(dbData);

//       toast.success('✅ Answer saved with AI feedback!');
//       setUserAnswer('');
//       setInterimResult('');

//     } catch (error) {
//       console.error('❌ Error saving answer:', error);
//       toast.error('Failed to save answer. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStartStopRecording = () => {
//     if (isRecording) stopSpeechToText();
//     else startSpeechToText();
//   };

//   useEffect(() => {
//     if (recognitionRef.current) {
//       try { recognitionRef.current.stop(); } catch (e) {}
//     }
//     setIsRecording(false);
//     setUserAnswer('');
//     setInterimResult('');
//     setSpeechError(null);
//   }, [activeQuestionIndex]);

//   if (!speechSupported) {
//     return (
//       <div className="bg-red-500/10 border border-red-500 rounded-2xl p-6">
//         <div className="flex items-center gap-3 mb-4">
//           <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center">
//             <AlertCircle className="w-5 h-5" />
//           </div>
//           <div>
//             <h3 className="text-white font-semibold text-lg">Browser Not Supported</h3>
//             <p className="text-red-300 text-sm">{speechError}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg">
//       <div className="flex items-center gap-3 mb-6">
//         <div className={`w-10 h-10 ${
//           isRecording ? 'bg-red-500 animate-pulse' : 'bg-gradient-to-br from-purple-500 to-teal-400'
//         } text-white rounded-xl flex items-center justify-center`}>
//           <Mic className="w-5 h-5" />
//         </div>
//         <div>
//           <h3 className="text-white font-semibold text-lg">Record Your Answer</h3>
//           <p className="text-gray-400 text-sm">
//             {isRecording ? "🎤 Recording... Speak now!" : "Click to start recording"}
//           </p>
//         </div>
//       </div>

//       <div className="relative mb-6">
//         <div className="relative bg-black rounded-2xl overflow-hidden aspect-video border-2 border-gray-600">
//           <Webcam mirrored className="w-full h-full object-cover" audio={false} />
//           {isRecording && (
//             <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500/90 text-white px-3 py-1 rounded-full">
//               <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//               <span className="text-sm font-medium">RECORDING</span>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="mb-6 bg-gray-700/50 rounded-xl p-4 border border-gray-600 min-h-[120px]">
//         <h4 className="text-white font-medium text-sm mb-2">
//           {isRecording ? 'Live Transcription' : 'Your Answer'}
//         </h4>
//         <div>
//           {loading ? (
//             <div className="flex items-center justify-center h-16">
//               <LoaderCircle className="w-6 h-6 animate-spin text-purple-400 mr-2" />
//               <span className="text-purple-400">Getting AI feedback...</span>
//             </div>
//           ) : userAnswer || interimResult ? (
//             <p className="text-white text-sm bg-purple-500/10 p-3 rounded-lg border border-purple-500/30">
//               {userAnswer || interimResult}
//             </p>
//           ) : (
//             <p className="text-gray-400 text-sm italic">Your answer will appear here...</p>
//           )}
//         </div>
//       </div>

//       <Button 
//         disabled={loading}
//         onClick={handleStartStopRecording}
//         className={`w-full font-semibold ${
//           isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-gradient-to-r from-purple-500 to-teal-400 hover:opacity-90'
//         } text-white`}
//       >
//         {loading ? (
//           <>
//             <LoaderCircle className="w-4 h-4 animate-spin mr-2" /> Getting AI Feedback...
//           </>
//         ) : isRecording ? (
//           <>
//             <StopCircle className="w-4 h-4 mr-2" /> Stop Recording & Get Feedback
//           </>
//         ) : (
//           <>
//             <Mic className="w-4 h-4 mr-2" /> Start Recording
//           </>
//         )}
//       </Button>
//     </div>
//   );
// }

// export default RecordAnswerSection;




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
  const recognitionRef = useRef(null);
  const finalAnswerRef = useRef(''); // Use ref to track final answer

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setSpeechSupported(false);
      toast.error("Speech recognition not supported in your browser");
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = 'en-US';

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
        setUserAnswer(prev => {
          const newAnswer = (prev + finalTranscript).trim();
          finalAnswerRef.current = newAnswer; // Update ref with current answer
          return newAnswer;
        });
      }
      setInterimResult(interimTranscript);
    };

    recognitionRef.current.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      if (event.error === 'not-allowed') {
        toast.error('Microphone permission denied. Please allow microphone access.');
      }
      setIsRecording(false);
    };

    recognitionRef.current.onend = () => {
      console.log('Speech recognition ended');
      // Auto-restart if still supposed to be recording
      if (isRecording) {
        setTimeout(() => {
          if (isRecording && recognitionRef.current) {
            recognitionRef.current.start();
          }
        }, 100);
      }
    };

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const StartStopRecording = async () => {
    if (!speechSupported) {
      toast.error("Speech recognition not supported in your browser");
      return;
    }

    if (isRecording) {
      // Stop recording
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsRecording(false);
      
      // Wait a moment for final transcription, then process
      setTimeout(async () => {
        const finalAnswer = userAnswer || finalAnswerRef.current;
        console.log("Final answer to save:", finalAnswer);
        
        if (finalAnswer && finalAnswer.trim().length >= 5) {
          await UpdateUserAnswer(finalAnswer);
        } else if (finalAnswer && finalAnswer.trim().length > 0) {
          toast.error("Please provide a longer answer (minimum 5 characters)");
        } else {
          toast.error("No speech detected. Please try again.");
        }
      }, 800);
    } else {
      // Start recording
      try {
        setUserAnswer('');
        setInterimResult('');
        finalAnswerRef.current = ''; // Reset ref
        if (recognitionRef.current) {
          recognitionRef.current.start();
          setIsRecording(true);
          toast.info("🎤 Recording started... Speak now!");
        }
      } catch (error) {
        console.error('Failed to start recording:', error);
        toast.error("Failed to start recording");
      }
    }
  };

  const UpdateUserAnswer = async (answerToSave) => {
    console.log("🚀 Starting to save answer:", answerToSave);
    
    if (!answerToSave || answerToSave.trim().length < 5) {
      toast.error("Please provide a longer answer (minimum 5 characters)");
      return;
    }

    setLoading(true);
    
    try {
      const currentQuestion = mockInterviewQuestion[activeQuestionIndex];
      
      if (!currentQuestion) {
        toast.error("No question found");
        return;
      }

      console.log("🤖 Getting AI feedback for:", answerToSave);
      
      let JsonFeedbackResp;
      try {
        const feedbackPrompt = `As an expert interview coach, analyze this interview response:

        Question: ${currentQuestion?.question}
        
        User's Answer: ${answerToSave}
        
        Please provide:
        1. A rating out of 10 (format: "X/10")
        2. Specific feedback on content, clarity, and structure (3-5 lines)
        3. Key strengths
        4. Areas for improvement
        
        Format your response as valid JSON:
        {
          "rating": "X/10",
          "feedback": "Your detailed feedback here...",
          "strengths": ["strength1", "strength2"],
          "improvements": ["area1", "area2"]
        }`

        const result = await chatSession.sendMessage(feedbackPrompt);
        const responseText = result.response.text();
        
        // Clean the response
        const cleanResponse = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        console.log("AI Response:", cleanResponse);

        try {
          JsonFeedbackResp = JSON.parse(cleanResponse);
        } catch (parseError) {
          console.error("JSON Parse Error:", parseError);
          // Fallback if JSON parsing fails
          JsonFeedbackResp = {
            rating: "7/10",
            feedback: "Good attempt. " + cleanResponse.substring(0, 150),
            strengths: ["Clear communication"],
            improvements: ["Could provide more specific examples"]
          };
        }
      } catch (aiError) {
        console.error("AI Error:", aiError);
        JsonFeedbackResp = {
          rating: "N/A",
          feedback: "AI feedback temporarily unavailable",
          strengths: [],
          improvements: []
        };
      }

      console.log("💾 Saving to database...");
      
      // Prepare data for database
      const dbData = {
        mockIdRef: interviewData?.mockId,
        question: currentQuestion?.question,
        correctAns: currentQuestion?.answer || "No standard answer provided",
        userAns: answerToSave, // Use the passed answer
        feedback: JsonFeedbackResp?.feedback || "No feedback available",
        rating: JsonFeedbackResp?.rating || "Pending",
        strengths: JSON.stringify(JsonFeedbackResp?.strengths || []),
        improvements: JSON.stringify(JsonFeedbackResp?.improvements || []),
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-YYYY')
      };

      console.log("📦 Database data:", dbData);

      // Save to database
      const resp = await db.insert(UserAnswer).values(dbData);
      console.log("✅ Database response:", resp);

      toast.success(`✅ Answer saved! ${JsonFeedbackResp?.rating ? `AI Rating: ${JsonFeedbackResp.rating}` : 'Answer recorded successfully!'}`);
      
      // Reset states
      setUserAnswer('');
      setInterimResult('');
      finalAnswerRef.current = '';

    } catch (error) {
      console.error("❌ Error saving answer:", error);
      toast.error("Failed to save answer. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // Reset when question changes
  useEffect(() => {
    setUserAnswer('');
    setInterimResult('');
    finalAnswerRef.current = '';
    if (isRecording && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
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
            <p className="text-red-300 text-sm">Speech recognition is not supported in your browser. Try Chrome or Edge.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 ${
          isRecording ? 'bg-red-500 animate-pulse' : 'bg-gradient-to-br from-purple-500 to-teal-400'
        } text-white rounded-xl flex items-center justify-center text-sm shadow-lg shadow-purple-500/30`}>
          <Mic className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">Record Your Answer</h3>
          <p className="text-gray-400 text-sm">
            {isRecording ? "🎤 Recording... Speak now!" : "Speak clearly and confidently"}
          </p>
        </div>
      </div>

      {/* Webcam Section */}
      <div className="relative mb-6">
        <div className="relative bg-black rounded-2xl overflow-hidden aspect-video border-2 border-gray-600">
          <Webcam 
            mirrored={true}
            className="w-full h-full object-cover"
            audio={false}
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
            <Mic className={`w-3 h-3 ${isRecording ? 'text-green-400' : 'text-gray-400'}`} />
            <span className="text-sm">{isRecording ? 'Microphone Active' : 'Microphone Ready'}</span>
          </div>
          
          <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/70 text-white px-3 py-1 rounded-full">
            <i className="fas fa-video text-green-400 text-sm"></i>
            <span className="text-sm">Camera Active</span>
          </div>
        </div>
      </div>

      {/* Transcription Preview */}
      <div className="mb-6 bg-gray-700/50 rounded-xl p-4 border border-gray-600 min-h-[120px]">
        <h4 className="text-white font-medium text-sm mb-2">
          {isRecording ? 'Live Transcription' : 'Your Answer'}
        </h4>
        <div>
          {loading ? (
            <div className="flex items-center justify-center h-16">
              <LoaderCircle className="w-6 h-6 animate-spin text-purple-400 mr-2" />
              <span className="text-purple-400">Processing AI feedback...</span>
            </div>
          ) : userAnswer || interimResult ? (
            <div>
              <p className="text-white text-sm bg-purple-500/10 p-3 rounded-lg border border-purple-500/30 mb-2">
                {userAnswer}
              </p>
              {interimResult && (
                <p className="text-gray-400 text-sm italic">
                  Live: {interimResult}
                </p>
              )}
            </div>
          ) : (
            <p className="text-gray-400 text-sm italic">Your answer will appear here...</p>
          )}
        </div>
        
        {interimResult && !userAnswer && isRecording && (
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

      {/* Debug Info - Remove in production */}
      <div className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
        <p className="text-yellow-400 text-xs">
          <strong>Debug:</strong> Answer length: {(userAnswer || finalAnswerRef.current).length} chars
        </p>
      </div>

      {/* Recording Controls */}
      <Button 
        disabled={loading}
        onClick={StartStopRecording}
        className={`w-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 ${
          isRecording 
            ? 'bg-red-500 text-white hover:bg-red-600 shadow-red-500/30' 
            : 'bg-gradient-to-r from-purple-500 to-teal-400 text-white shadow-purple-500/30 hover:shadow-xl'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <LoaderCircle className="w-4 h-4 animate-spin" />
            Processing AI Feedback...
          </span>
        ) : isRecording ? (
          <span className="flex items-center gap-2">
            <StopCircle className="w-4 h-4" />
            Stop Recording & Analyze
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Mic className="w-4 h-4" />
            Start Recording Answer
          </span>
        )}
      </Button>

      {/* Tips */}
      

      {/* Add Font Awesome CSS */}
      <style jsx>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
      `}</style>
    </div>
  )
}

export default RecordAnswerSection