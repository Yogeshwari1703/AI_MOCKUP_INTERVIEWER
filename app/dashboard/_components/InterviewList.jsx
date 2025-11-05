"use client"

import React,{useEffect,useState} from 'react'
import {useUser} from '@clerk/nextjs'
import {db} from '@/utils/db';
import {MockInterview} from '@/utils/schema';
import {desc,eq} from 'drizzle-orm';
import InterviewItemCard from './InterviewItemCard';

function InterviewList() {

    const {user}=useUser();

    const [interviewList,setInterviewList]=useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        user&&GetInterviewList();
    },[user])

    const GetInterviewList=async()=>{
        setLoading(true);
        const result=await db.select()
        .from(MockInterview)
        .where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(MockInterview.id))

        console.log(result);
        setInterviewList(result);
        setLoading(false);
    }

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10">
      {/* Header with Icon */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-2xl flex items-center justify-center text-lg shadow-lg shadow-purple-500/30">
          <i className="fas fa-history"></i>
        </div>
        <div>
          <h2 className='font-bold text-xl text-white'>Previous Mock Interviews</h2>
          <p className='text-gray-400 text-sm'>Your interview practice history</p>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <div className="flex items-center gap-3 text-purple-400">
            <i className="fas fa-spinner animate-spin text-2xl"></i>
            <span className="text-lg">Loading interviews...</span>
          </div>
        </div>
      ) : (
        <>
          {/* Empty State */}
          {interviewList.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-gray-600 rounded-2xl">
              <div className="w-16 h-16 bg-gray-700 text-gray-500 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                <i className="fas fa-inbox"></i>
              </div>
              <h3 className="text-gray-400 text-lg font-medium mb-2">No interviews yet</h3>
              <p className="text-gray-500 text-sm">Start your first mock interview to see it here</p>
            </div>
          ) : (
            /* Interview Grid */
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {interviewList.map((interview,index)=>(
                  <InterviewItemCard 
                  interview={interview}
                  key={index} />
              ))}
            </div>
          )}
        </>
      )}

      {/* Stats Bar */}
      {interviewList.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-700">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <i className="fas fa-chart-bar text-teal-400"></i>
              <span>Total Interviews: {interviewList.length}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <i className="fas fa-calendar text-purple-400"></i>
              <span>Latest: {interviewList[0]?.createdAt}</span>
            </div>
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

export default InterviewList