"use client"

import React, { useEffect, useState } from 'react'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Link from "next/link";

const Header = () => {
  const path = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    console.log(path);
  }, [path]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [path]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { href: "/", label: "Home", path: "/" },
    { href: "/dashboard", label: "Dashboard", path: "/dashboard" },
    { href: "/dashboard/help", label: "Help", path: "/dashboard/help" },
    { href: "/dashboard/about", label: "about", path: "/dashboard/about" },
    // { href: "/dashboard/report/${interviewId}", label: "Reports", path: "/dashboard/report/${interviewId}" },
  ];

  // Helper function to determine if a link is active
  const isActive = (itemPath) => {
    if (!isMounted) return false; // Return false during SSR to match client
    return path === itemPath;
  };

  const getNavItemClass = (itemPath) => {
    const baseClass = "transition-all cursor-pointer px-4 py-2 rounded-lg";
    
    if (isActive(itemPath)) {
      return `${baseClass} bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-lg shadow-purple-500/10`;
    } else {
      return `${baseClass} text-gray-400 hover:text-white hover:bg-gray-800/50`;
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:flex p-6 justify-between items-center bg-gray-900/90 backdrop-blur-md border-b border-purple-500/20">
        {/* Logo Section */}
        <div className='flex items-center gap-3'>
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-teal-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
            <span className="text-xl font-bold">AI</span>
          </div>
          <div>
            <h2 className='bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent text-2xl font-bold'>
              InterviewAI
            </h2>
            <p className="text-gray-400 text-xs">Master Your Interviews</p>
          </div>
        </div>
        
        {/* Navigation */}
        <ul className="flex gap-8">
          {navigationItems.map((item) => (
            <li 
              key={item.href}
              className={getNavItemClass(item.path)}
            >
              <Link href={item.href} className="block w-full h-full">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* User Section */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-gray-400 bg-gray-800/50 px-4 py-2 rounded-xl border border-gray-700">
            <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-teal-400 rounded-full animate-pulse"></div>
            <span className="text-sm">AI Powered</span>
          </div>
          <UserButton 
            appearance={{
              elements: {
                userButtonBox: "shadow-lg shadow-purple-500/20",
                userButtonTrigger: "bg-gray-800/70 border border-purple-500/30 hover:bg-gray-700/70 transition-all duration-300",
                userButtonAvatarBox: "w-10 h-10",
                card: "bg-gray-800 border border-purple-500/30 shadow-2xl shadow-purple-500/20 rounded-2xl",
                headerTitle: "text-white font-bold text-lg",
                headerSubtitle: "text-gray-300",
                menuItem: "text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all duration-300 rounded-lg",
                menuButton: "text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all duration-300 rounded-lg",
                menuList: "space-y-2 p-2",
                actionButton: "text-gray-300 hover:text-white hover:bg-purple-500/20",
                actionButtonText: "text-gray-300 hover:text-white",
                footer: "hidden",
                badge: "bg-gradient-to-r from-purple-500 to-teal-400 text-white",
                identityPreview: "border-b border-gray-700 pb-4",
                identityPreviewText: "text-white",
                identityPreviewEditButton: "text-purple-400 hover:text-purple-300",
                formFieldLabel: "text-white text-sm font-medium",
                formFieldInput: "bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300",
                formFieldSuccess: "text-green-400",
                formFieldError: "text-red-400",
                formButtonPrimary: "bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-xl transition-all duration-300",
                formButtonReset: "text-gray-400 hover:text-white transition-colors duration-300 border border-gray-600 hover:border-gray-500",
                socialButtonsBlockButton: "bg-gray-700/50 border border-gray-600 text-white hover:bg-gray-600/50 transition-all duration-300 rounded-lg",
                socialButtonsBlockButtonText: "text-white text-sm",
                socialButtonsProviderIcon: "filter-none opacity-100",
                profileSectionPrimaryButton: "text-gray-300 hover:text-white hover:bg-purple-500/20",
                profileSectionTitle: "text-white",
                profileSectionContent: "text-gray-300",
                accountSwitcherTrigger: "text-gray-300 hover:text-white",
                accountSwitcherTriggerText: "text-gray-300 hover:text-white",
              },
              variables: {
                colorPrimary: "#8b5cf6",
                colorText: "#ffffff",
                colorTextSecondary: "#d1d5db",
                colorTextOnPrimaryBackground: "#ffffff",
                colorBackground: "#1f2937",
                colorInputBackground: "#374151",
                colorInputText: "#ffffff",
                colorSuccess: "#10b981",
                colorDanger: "#ef4444",
                colorWarning: "#f59e0b",
                colorShimmer: "rgba(139, 92, 246, 0.1)",
              }
            }}
            afterSignOutUrl="/"
          />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex p-4 justify-between items-center bg-gray-900/90 backdrop-blur-md border-b border-purple-500/20">
        {/* Logo Section */}
        <div className='flex items-center gap-3'>
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-teal-400 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
            <span className="text-lg font-bold">AI</span>
          </div>
          <div>
            <h2 className='bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent text-xl font-bold'>
              InterviewAI
            </h2>
          </div>
        </div>

        {/* Mobile Menu Button and User */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-gray-400 bg-gray-800/50 px-3 py-1 rounded-xl border border-gray-700 text-xs">
            <div className="w-2 h-2 bg-gradient-to-br from-purple-500 to-teal-400 rounded-full animate-pulse"></div>
            <span>AI Powered</span>
          </div>
          
          <UserButton 
            appearance={{
              elements: {
                userButtonBox: "shadow-lg shadow-purple-500/20",
                userButtonTrigger: "bg-gray-800/70 border border-purple-500/30 hover:bg-gray-700/70 transition-all duration-300",
                userButtonAvatarBox: "w-8 h-8",
                card: "bg-gray-800 border border-purple-500/30 shadow-2xl shadow-purple-500/20 rounded-2xl",
                headerTitle: "text-white font-bold text-lg",
                headerSubtitle: "text-gray-300",
                menuItem: "text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all duration-300 rounded-lg",
              },
            }}
            afterSignOutUrl="/"
          />

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-md">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col items-center justify-center h-full -mt-20">
            <div className="space-y-6 text-center">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-2xl font-semibold transition-all duration-300 py-3 px-6 rounded-2xl ${
                    isActive(item.path)
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-lg shadow-purple-500/20'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Additional Mobile Info */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                AI-Powered Interview Platform
              </div>
            </div>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
        </div>
      )}
    </>
  )
}

export default Header