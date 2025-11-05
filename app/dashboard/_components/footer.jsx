"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16 border-t border-purple-500/20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-teal-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
                <span className="text-xl font-bold">AI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent">
                  InterviewAI
                </h3>
                <p className="text-gray-400 text-xs">Master Your Interviews</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The most advanced AI-powered platform for interview preparation and skill development.
            </p>
            <div className="flex gap-4">
              {['twitter', 'linkedin-in', 'instagram', 'youtube'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-teal-400">Platform</h4>
            <ul className="space-y-3">
              {[
                { href: "/dashboard", label: "Dashboard" },
                { href: "/dashboard/interview/new", label: "New Interview" },
                { href: "/dashboard/reports", label: "Reports" },
                { href: "/upgrade", label: "Upgrade Plan" }
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-teal-400">Resources</h4>
            <ul className="space-y-3">
              {[
                { href: "/blog", label: "Blog & Articles" },
                { href: "/interview-tips", label: "Interview Tips" },
                { href: "/tutorials", label: "Video Tutorials" },
                { href: "/help", label: "Help Center" }
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-teal-400">Support</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">
                  <i className="fas fa-envelope text-sm"></i>
                </div>
                <div>
                  <p className="text-white">Email Support</p>
                  <p>support@interviewai.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center text-teal-400">
                  <i className="fas fa-clock text-sm"></i>
                </div>
                <div>
                  <p className="text-white">Response Time</p>
                  <p>Within seconds</p>
                </div>
              </div>

              {/* <div className="mt-4 p-3 bg-gray-800/50 rounded-lg border border-purple-500/20">
                <p className="text-xs text-gray-400 text-center">
                  🚀 <span className="text-purple-400">Premium Support</span> for all paid plans
                </p>
              </div> */}
            </div>
          </div>
        </div>

        

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} InterviewAI. All rights reserved.</p>
            </div>
            
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <div className="w-2 h-2 bg-gradient-to-br from-purple-500 to-teal-400 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}