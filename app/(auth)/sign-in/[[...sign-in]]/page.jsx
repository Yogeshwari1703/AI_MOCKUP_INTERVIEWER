import { SignIn } from '@clerk/nextjs'
 import React from 'react';

export default function Page() {
 
  return (
    <div className="flex min-h-screen">
      {/* Left side: welcome / hero */}
      <div className="relative hidden w-1/2 bg-blue-950 text-white lg:flex items-center justify-center p-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Welcome to Your App 🚀</h1>
          <p className="text-lg text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam.
          </p>
        </div>
        {/* Optionally add a background image with absolute positioning */}
      </div>

      {/* Right side: auth form */}
      <div className="flex w-full flex-col items-center justify-center bg-gray-50 p-8 lg:w-1/2">
        {/* Replace below with your custom form or Clerk component */}
        <div className="w-full max-w-md">
          {/* <SignInForm /> */}
          <SignIn/>
        </div>
      </div>
    </div>
  );
}
