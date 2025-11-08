
"use client";
import React, { useState, useEffect, useRef } from 'react'
import Webcam from 'react-webcam'
import { Button } from '@/components/ui/button'
import { Mic, StopCircle, LoaderCircle, AlertCircle } from "lucide-react"; 
import { toast } from "sonner";
import moment from "moment";
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
        
        try {
          recognitionRef.current.stop();
        } catch (e) {}

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
          console.log('🔄 Final answer ready for saving:', finalAnswer);
          
          if (finalAnswer.length >= 5) {
            processUserAnswer(finalAnswer);
          } else if (finalAnswer.length > 0) {
            toast.error("Please provide a longer answer (minimum 5 characters)");
          } else {
            toast.error("No answer recorded. Please try again.");
          }
        }, 800);
      } catch {
        setIsRecording(false);
      }
    }
  };

  const processUserAnswer = async (answerToProcess) => {
    console.log('🚀 Starting to save answer to database:', answerToProcess);
    
    if (!answerToProcess || answerToProcess.trim().length < 5) {
      toast.error("Please provide a longer answer");
      return;
    }

    setLoading(true);

    try {
      const currentQuestion = mockInterviewQuestion[activeQuestionIndex];
      
      if (!currentQuestion) {
        toast.error("No question found");
        return;
      }

      console.log('💾 Preparing database data...');
      
      // Prepare data for database
      const dbData = {
        mockIdRef: interviewData?.mockId,
        question: currentQuestion.question,
        correctAns: currentQuestion.answer || "No correct answer provided",
        userAns: answerToProcess,
        feedback: "AI feedback temporarily disabled - answer saved successfully",
        rating: "Pending review",
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-YYYY')
      };

      console.log('📦 Database data:', dbData);

      // Save to database - SIMPLE VERSION WITHOUT AI
      try {
        console.log('💫 Attempting database insert...');
        const result = await db.insert(UserAnswer).values(dbData);
        console.log('✅ Database insert result:', result);
        
        toast.success('✅ Answer saved successfully!');
        setUserAnswer('');
        setInterimResult('');
        
      } catch (dbError) {
        console.error('❌ Database error:', dbError);
        throw new Error(`Database failed: ${dbError.message}`);
      }

    } catch (error) {
      console.error('❌ Error saving answer:', error);
      toast.error('Failed to save answer. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleStartStopRecording = () => {
    if (isRecording) stopSpeechToText();
    else startSpeechToText();
  };

  // Reset when question changes
  useEffect(() => {
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch (e) {}
    }
    setIsRecording(false);
    isStartingRef.current = false;
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
        <div className={`w-10 h-10 ${
          isRecording ? 'bg-red-500 animate-pulse' : 'bg-gradient-to-br from-purple-500 to-teal-400'
        } text-white rounded-xl flex items-center justify-center`}>
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

      {/* Debug Info */}
      <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
        <p className="text-blue-400 text-xs font-mono">
          🔧 Status: {loading ? 'Saving...' : isRecording ? 'Recording' : 'Ready'} | 
          Answer: {userAnswer.length} chars | 
          AI: Disabled (Using direct save)
        </p>
      </div>

      <div className="mb-6 bg-gray-700/50 rounded-xl p-4 border border-gray-600 min-h-[120px]">
        <h4 className="text-white font-medium text-sm mb-2">
          {isRecording ? 'Live Transcription' : 'Your Answer'}
        </h4>
        <div>
          {loading ? (
            <div className="flex items-center justify-center h-16">
              <LoaderCircle className="w-6 h-6 animate-spin text-purple-400 mr-2" />
              <span className="text-purple-400">Saving your answer...</span>
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
        className={`w-full font-semibold ${
          isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-gradient-to-r from-purple-500 to-teal-400 hover:opacity-90'
        } text-white transition-all duration-300`}
      >
        {loading ? (
          <>
            <LoaderCircle className="w-4 h-4 animate-spin mr-2" /> Saving Answer...
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

      {/* Success Message Area */}
      {!loading && userAnswer.length > 0 && !isRecording && (
        <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
          <p className="text-green-400 text-sm">
            ✅ Answer ready to save! Click "Stop Recording & Save" above.
          </p>
        </div>
      )}
    </div>
  );
}

export default RecordAnswerSection;
