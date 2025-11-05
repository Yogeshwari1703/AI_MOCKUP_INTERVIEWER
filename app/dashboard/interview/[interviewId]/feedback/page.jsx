"use client"

import React, { useEffect, useState } from 'react'
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { ChevronsDownUp, Home, Trophy, Star, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Make sure these are **named exports** in collapsible.jsx
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from '@/components/ui/button'

function Feedback({ params }) {

  const { interviewId } = React.use(params)
  const [feedbackList, setFeedbackList] = useState([])
  const [overallRating, setOverallRating] = useState(0)
  const router = useRouter();

  useEffect(() => {
    GetFeedback()
  }, [])

  useEffect(() => {
    if (feedbackList.length > 0) {
      // Calculate average rating
      const totalRating = feedbackList.reduce((sum, item) => {
        const rating = parseFloat(item.rating) || 0;
        return sum + rating;
      }, 0);
      setOverallRating((totalRating / feedbackList.length).toFixed(1));
    }
  }, [feedbackList])

  const GetFeedback = async () => {
    const result = await db.select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, interviewId))
      .orderBy(UserAnswer.id)

    console.log(result)
    setFeedbackList(result)
  }

  const getRatingColor = (rating) => {
    const numRating = parseFloat(rating);
    if (numRating >= 8) return 'text-green-400';
    if (numRating >= 6) return 'text-yellow-400';
    if (numRating >= 4) return 'text-orange-400';
    return 'text-red-400';
  };

  const getRatingBg = (rating) => {
    const numRating = parseFloat(rating);
    if (numRating >= 8) return 'bg-green-500/20 border-green-500/30';
    if (numRating >= 6) return 'bg-yellow-500/20 border-yellow-500/30';
    if (numRating >= 4) return 'bg-orange-500/20 border-orange-500/30';
    return 'bg-red-500/20 border-red-500/30';
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 p-6'>
      {feedbackList?.length == 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="w-20 h-20 bg-gray-700 text-gray-500 rounded-2xl flex items-center justify-center text-2xl mb-4">
            <i className="fas fa-inbox"></i>
          </div>
          <h2 className='font-bold text-2xl text-gray-400 mb-2'>No Interview Feedback Found</h2>
          <p className='text-gray-500 mb-6'>Complete an interview session to see your feedback here</p>
          <Button 
            onClick={() => router.replace('/dashboard')}
            className="bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Home className="w-4 h-4 mr-2" />
            Go to Dashboard
          </Button>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-400 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-green-500/30 mx-auto mb-4">
              <Trophy className="w-8 h-8" />
            </div>
            <h2 className='text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent mb-2'>
              Congratulations!
            </h2>
            <p className='text-gray-400 text-lg'>You've completed the interview session</p>
          </div>

          {/* Overall Rating Card */}
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Overall Performance</h3>
                <p className="text-gray-400 text-sm">Based on {feedbackList.length} questions</p>
              </div>
              <div className={`px-6 py-3 rounded-xl ${getRatingBg(overallRating)} border text-center`}>
                <div className="flex items-center gap-2">
                  <Star className={`w-5 h-5 ${getRatingColor(overallRating)} fill-current`} />
                  <span className={`text-2xl font-bold ${getRatingColor(overallRating)}`}>
                    {overallRating}/10
                  </span>
                </div>
                <p className="text-gray-400 text-xs mt-1">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Feedback List */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-xl flex items-center justify-center text-sm shadow-lg shadow-purple-500/30">
                <i className="fas fa-chart-bar"></i>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Detailed Feedback</h3>
                <p className="text-gray-400 text-sm">Question-by-question analysis</p>
              </div>
            </div>

            <div className="space-y-4">
              {feedbackList.map((item, index) => (
                <Collapsible key={index} className='bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-600 hover:border-purple-500/50 transition-all duration-300'>
                  <CollapsibleTrigger className='p-6 flex justify-between items-center text-left gap-4 w-full hover:bg-gray-700/30 transition-colors duration-200 rounded-xl'>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">
                          Question {index + 1}
                        </span>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getRatingBg(item.rating)} ${getRatingColor(item.rating)}`}>
                          {item.rating}/10
                        </span>
                      </div>
                      <p className="text-white text-sm leading-relaxed">{item.question}</p>
                    </div>
                    <ChevronsDownUp className='h-5 w-5 text-gray-400 flex-shrink-0' />
                  </CollapsibleTrigger> 
                  <CollapsibleContent className="px-6 pb-6">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
                      <div className='p-4 rounded-lg bg-red-500/10 border border-red-500/30'>
                        <div className="flex items-center gap-2 mb-2">
                          <i className="fas fa-user text-red-400 text-sm"></i>
                          <h4 className="text-red-400 font-semibold text-sm">Your Answer</h4>
                        </div>
                        <p className="text-red-300 text-sm leading-relaxed">{item.userAns}</p>
                      </div>
                      
                      <div className='p-4 rounded-lg bg-green-500/10 border border-green-500/30'>
                        <div className="flex items-center gap-2 mb-2">
                          <i className="fas fa-check-circle text-green-400 text-sm"></i>
                          <h4 className="text-green-400 font-semibold text-sm">Expected Answer</h4>
                        </div>
                        <p className="text-green-300 text-sm leading-relaxed">{item.correctAns}</p>
                      </div>
                      
                      <div className='p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 lg:col-span-2'>
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-4 h-4 text-blue-400" />
                          <h4 className="text-blue-400 font-semibold text-sm">AI Feedback & Improvement</h4>
                        </div>
                        <p className="text-blue-300 text-sm leading-relaxed">{item.feedback}</p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center">
            <Button 
              onClick={() => router.replace('/dashboard')}
              className="bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-3"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>
        </div>
      )}

      {/* Add Font Awesome CSS */}
      <style jsx>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
      `}</style>
    </div>
  )
}

export default Feedback