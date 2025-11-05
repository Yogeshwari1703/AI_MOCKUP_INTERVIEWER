import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

const Dashboard = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 p-6'>
      

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center text-lg">
              +
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">Start New Interview</h3>
              <p className="text-gray-400 text-sm">Create personalized questions</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-teal-500/30 shadow-lg shadow-teal-500/10 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-2xl flex items-center justify-center text-lg">
              ↻
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">Practice History</h3>
              <p className="text-gray-400 text-sm">Review past interviews</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center text-lg">
              📈
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">Track Progress</h3>
              <p className="text-gray-400 text-sm">Monitor your improvement</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Quick Start Section */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-xl flex items-center justify-center text-sm">
                ⚡
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Quick Start</h3>
                <p className="text-gray-400 text-sm">Begin in seconds</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Start a new AI-powered mock interview tailored to your specific job goals and experience level.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-xs text-white">✓</div>
                <span>Personalized questions</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-xs text-white">✓</div>
                <span>Instant AI feedback</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-xs text-white">✓</div>
                <span>Progress tracking</span>
              </div>
            </div>
          </div>
          
          {/* Add New Interview Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10">
            <AddNewInterview />
          </div>
        </div>

        {/* Interview List Section */}
        <div className="lg:col-span-3">
          <InterviewList />
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-3 bg-purple-500/20 border border-purple-500 rounded-full px-6 py-3 text-purple-300">
          <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-teal-400 rounded-full flex items-center justify-center text-xs text-white">
            AI
          </div>
          <span className="text-sm">Powered by Advanced AI Technology • Improve your interview skills with every session</span>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

