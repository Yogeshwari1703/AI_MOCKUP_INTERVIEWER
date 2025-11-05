"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { eq } from "drizzle-orm";
import { MockInterview } from "@/utils/schema";
import Webcam from "react-webcam";
import { Webcam as WebcamIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Lightbulb } from 'lucide-react';
import Link from "next/link";

function Interview({ params }) {
  // ✅ unwrap params using React.use()
  const { interviewId } = React.use(params);

  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (interviewId) {
      GetInterviewDetails();
    }
  }, [interviewId]);

  const GetInterviewDetails = async () => {
    setLoading(true);
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, interviewId));

    console.log("Fetched result:", result);
    setInterviewData(result[0]);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-purple-500/30 mx-auto mb-4 animate-pulse">
            <i className="fas fa-spinner animate-spin"></i>
          </div>
          <h2 className="text-white text-xl font-semibold">Loading interview details...</h2>
        </div>
      </div>
    );
  }

  if (!interviewData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-400 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-red-500/30 mx-auto mb-4">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
          <h2 className="text-white text-xl font-semibold mb-2">Interview Not Found</h2>
          <p className="text-gray-400">The requested interview could not be loaded.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="font-bold text-4xl bg-gradient-to-r from-gray-100 to-purple-300 bg-clip-text text-transparent mb-2">
          Let's Get Started
        </h2>
        <p className="text-gray-400 text-lg">Prepare for your AI-powered mock interview</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Column - Interview Details */}
        <div className="space-y-6">
          {/* Job Details Card */}
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-xl flex items-center justify-center text-sm shadow-lg shadow-purple-500/30">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3 className="text-white font-semibold text-lg">Interview Details</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="fas fa-user-tie text-purple-400 mt-1"></i>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium">Job Position</h4>
                  <p className="text-white">{interviewData?.jobPosition ?? "Not available"}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <i className="fas fa-code text-teal-400 mt-1"></i>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium">Tech Stack & Description</h4>
                  <p className="text-white">{interviewData?.jobDesc ?? "Not available"}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <i className="fas fa-chart-line text-purple-400 mt-1"></i>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium">Experience Level</h4>
                  <p className="text-white">{interviewData?.jobExperience ?? "0"} Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Information Card */}
          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 rounded-2xl p-6 border border-yellow-500/30 shadow-lg shadow-yellow-500/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-400 text-white rounded-xl flex items-center justify-center text-sm shadow-lg shadow-yellow-500/30">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="text-yellow-400 font-semibold text-lg">Important Information</h3>
            </div>
            <p className="text-yellow-300/80 text-sm leading-relaxed">
              {process.env.NEXT_PUBLIC_INFORMATION || "Make sure you have a stable internet connection and are in a quiet environment for the best interview experience."}
            </p>
          </div>
        </div>

        {/* Right Column - Webcam Setup */}
        <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-400 text-white rounded-xl flex items-center justify-center text-sm shadow-lg shadow-blue-500/30">
              <i className="fas fa-video"></i>
            </div>
            <h3 className="text-white font-semibold text-lg">Camera Setup</h3>
          </div>

          {webCamEnabled ? (
            <div className="text-center space-y-4">
              <div className="relative bg-black rounded-2xl overflow-hidden aspect-video">
                <Webcam
                  onUserMedia={() => setWebCamEnabled(true)}
                  onUserMediaError={() => setWebCamEnabled(false)}
                  mirrored={true}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-green-500/90 text-white px-3 py-1 rounded-full">
                  <i className="fas fa-circle text-xs animate-pulse"></i>
                  <span className="text-sm font-medium">LIVE</span>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                onClick={() => setWebCamEnabled(false)}
              >
                <i className="fas fa-times mr-2"></i>
                Disable Camera
              </Button>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="bg-gray-700/50 rounded-2xl p-12 border-2 border-dashed border-gray-600">
                <WebcamIcon className="h-24 w-24 mx-auto text-gray-500 mb-4" />
                <p className="text-gray-400 text-sm">Camera and microphone are disabled</p>
              </div>
              <Button 
                className="bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 w-full"
                onClick={() => setWebCamEnabled(true)}
              >
                <i className="fas fa-camera mr-2"></i>
                Enable Webcam & Microphone
              </Button>
              <p className="text-gray-400 text-xs">
                We recommend enabling your camera for a more realistic interview experience
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Start Interview Button */}
      <div className="flex justify-center mt-8">
        <Link href={'/dashboard/interview/'+interviewId+'/start'}>
          <Button className="bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold text-lg px-8 py-3 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <i className="fas fa-play mr-2"></i>
            Start Interview Now
          </Button>
        </Link>
      </div>

      {/* Add Font Awesome CSS */}
      <style jsx>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
      `}</style>
    </div>
  );
}

export default Interview;


