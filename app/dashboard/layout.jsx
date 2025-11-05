'use client'

import React from 'react'
import Header from './_components/header';
import Footer from './_components/footer';

function DashboardLayout({children}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 flex flex-col">
      {/* Add Font Awesome CSS in head using next/head */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <Header />
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 2xl:mx-36 py-6 flex-1">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Main Content Container */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DashboardLayout