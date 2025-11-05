import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation';

function InterviewItemCard({interview}) {

    const router=useRouter();

    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }

    const onFeedbackPress=()=>{
        router.push('/dashboard/interview/'+interview.mockId+"/feedback")
    }

  return (
    <div className='border border-purple-500/30 shadow-lg shadow-purple-500/10 rounded-2xl p-6 bg-gray-800/70 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden'>
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
      
      <div className="relative z-10">
        {/* Job Position with Icon */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-xl flex items-center justify-center text-sm shadow-lg shadow-purple-500/30">
            <i className="fas fa-briefcase"></i>
          </div>
          <h2 className='font-bold text-lg text-white group-hover:text-purple-300 transition-colors duration-300'>
            {interview?.jobPosition}
          </h2>
        </div>

        {/* Experience with Icon */}
        <div className="flex items-center gap-2 mb-2">
          <i className="fas fa-chart-line text-teal-400 text-sm"></i>
          <h2 className='text-sm text-gray-300'>
            {interview?.jobExperience} Years of Experience
          </h2>
        </div>

        {/* Created Date with Icon */}
        <div className="flex items-center gap-2 mb-4">
          <i className="fas fa-calendar text-purple-400 text-xs"></i>
          <h2 className='text-xs text-gray-400'>
            Created: {interview.createdAt}
          </h2>
        </div>

        {/* Action Buttons */}
        <div className='flex justify-between gap-3 mt-4'>
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 border border-gray-600 text-gray-500 hover:bg-gray-700 hover:text-white hover:border-purple-500 transition-all duration-300 group/btn"
            onClick={onFeedbackPress}
          >
            <span className="flex items-center gap-2">
              <i className="fas fa-chart-bar group-hover/btn:text-purple-400 transition-colors duration-300"></i>
              Feedback
            </span>
          </Button>
       
          <Button 
            className="flex-1 bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 group/btn"
            onClick={onStart}
          >
            <span className="flex items-center gap-2">
              <i className="fas fa-play group-hover/btn:scale-110 transition-transform duration-300"></i>
              Start
            </span>
          </Button>
        </div>
      </div>

      {/* Add Font Awesome CSS */}
      <style jsx>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
      `}</style>
    </div>
  )
}

export default InterviewItemCard