// // // import { SignIn } from '@clerk/nextjs'
// // //  import React from 'react';

// // // export default function Page() {
 
// // //   return (
// // //     <div className="flex min-h-screen">
// // //       {/* Left side: welcome / hero */}
// // //       <div className="relative hidden w-1/2 bg-blue-950 text-white lg:flex items-center justify-center p-8">
// // //         <div className="space-y-4">
// // //           <h1 className="text-4xl font-bold">Welcome to Your App 🚀</h1>
// // //           <p className="text-lg text-gray-300">
// // //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam.
// // //           </p>
// // //         </div>
// // //         {/* Optionally add a background image with absolute positioning */}
// // //       </div>

// // //       {/* Right side: auth form */}
// // //       <div className="flex w-full flex-col items-center justify-center bg-gray-50 p-8 lg:w-1/2">
// // //         {/* Replace below with your custom form or Clerk component */}
// // //         <div className="w-full max-w-md">
// // //           {/* <SignInForm /> */}
// // //           <SignIn/>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // // import { SignIn } from '@clerk/nextjs'
// // // import React from 'react';

// // // export default function Page() {
 
// // //   return (
// // //     <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-950">
// // //       {/* Left side: Hero Section */}
// // //       <div className="relative hidden w-1/2 lg:flex items-center justify-center p-8">
// // //         {/* Animated Background Elements */}
// // //         <div className="absolute inset-0 overflow-hidden">
// // //           <div className="absolute top-1/4 -left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
// // //           <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
// // //           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
// // //         </div>
        
// // //         {/* Hero Content */}
// // //         <div className="relative z-10 text-center space-y-6 max-w-md">
// // //           {/* Logo */}
// // //           <div className="flex justify-center mb-8">
// // //             <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-teal-400 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-purple-500/30">
// // //               <span className="text-2xl font-bold">AI</span>
// // //             </div>
// // //           </div>
          
// // //           <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-100 to-purple-300 bg-clip-text text-transparent">
// // //             InterviewAI
// // //           </h1>
// // //           <p className="text-xl text-gray-400 leading-relaxed">
// // //             Master interviews with AI-powered simulations and get instant feedback to improve your skills.
// // //           </p>
          
// // //           {/* Features List */}
// // //           <div className="space-y-4 mt-8">
// // //             <div className="flex items-center gap-3 text-gray-300">
// // //               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
// // //                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
// // //               </div>
// // //               <span>AI-powered mock interviews</span>
// // //             </div>
// // //             <div className="flex items-center gap-3 text-gray-300">
// // //               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
// // //                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
// // //               </div>
// // //               <span>Real-time feedback & ratings</span>
// // //             </div>
// // //             <div className="flex items-center gap-3 text-gray-300">
// // //               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
// // //                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
// // //               </div>
// // //               <span>Personalized question sets</span>
// // //             </div>
// // //             <div className="flex items-center gap-3 text-gray-300">
// // //               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
// // //                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
// // //               </div>
// // //               <span>Progress tracking & analytics</span>
// // //             </div>
// // //           </div>
          
// // //           {/* Trust Badge */}
// // //           <div className="mt-8 inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-6 py-3">
// // //             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
// // //             <span className="text-purple-300 text-sm">Trusted by thousands of job seekers</span>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Right side: Auth Form */}
// // //       <div className="flex w-full flex-col items-center justify-center p-8 lg:w-1/2">
// // //         <div className="w-full max-w-md space-y-8">
// // //           {/* Mobile Logo */}
// // //           <div className="lg:hidden flex justify-center mb-8">
// // //             <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-400 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-purple-500/30">
// // //               <span className="text-xl font-bold">AI</span>
// // //             </div>
// // //           </div>
          
// // //           {/* Mobile Title */}
// // //           <div className="lg:hidden text-center mb-8">
// // //             <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-100 to-purple-300 bg-clip-text text-transparent mb-2">
// // //               InterviewAI
// // //             </h1>
// // //             <p className="text-gray-400">Sign in to master your interviews</p>
// // //           </div>

// // //           {/* Auth Container */}
// // //           <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
// // //             <div className="text-center mb-6">
// // //               <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
// // //               <p className="text-gray-400 mt-2">Sign in to continue your interview practice</p>
// // //             </div>
            
// // //             {/* Clerk SignIn Component */}
// // //             <SignIn 
// // //               appearance={{
// // //                 elements: {
// // //                   rootBox: "w-full",
// // //                   card: "bg-transparent shadow-none",
// // //                   headerTitle: "text-white hidden",
// // //                   headerSubtitle: "text-gray-400 hidden",
// // //                   socialButtonsBlock: "space-y-3",
// // //                   socialButtonsBlockButton: 
// // //                     "bg-gray-700/50 border border-gray-600 text-white hover:bg-gray-600/50 transition-all duration-300",
// // //                   formFieldInput: 
// // //                     "bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500",
// // //                   formButtonPrimary: 
// // //                     "bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300",
// // //                   footer: "hidden"
// // //                 }
// // //               }}
// // //             />
// // //           </div>

// // //           {/* Footer Note */}
// // //           <div className="text-center">
// // //             <p className="text-gray-500 text-sm">
// // //               By continuing, you agree to our Terms of Service and Privacy Policy
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }




// // import { SignIn } from '@clerk/nextjs'
// // import React from 'react';

// // export default function Page() {
 
// //   return (
// //     <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-950">
// //       {/* Left side: Hero Section */}
// //       <div className="relative hidden w-1/2 lg:flex items-center justify-center p-8">
// //         {/* Animated Background Elements */}
// //         <div className="absolute inset-0 overflow-hidden">
// //           <div className="absolute top-1/4 -left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
// //           <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
// //           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
// //         </div>
        
// //         {/* Hero Content */}
// //         <div className="relative z-10 text-center space-y-6 max-w-md">
// //           {/* Logo */}
// //           <div className="flex justify-center mb-8">
// //             <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-teal-400 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-purple-500/30">
// //               <span className="text-2xl font-bold">AI</span>
// //             </div>
// //           </div>
          
// //           <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-100 to-purple-300 bg-clip-text text-transparent">
// //             InterviewAI
// //           </h1>
// //           <p className="text-xl text-gray-400 leading-relaxed">
// //             Master interviews with AI-powered simulations and get instant feedback to improve your skills.
// //           </p>
          
// //           {/* Features List */}
// //           <div className="space-y-4 mt-8">
// //             <div className="flex items-center gap-3 text-gray-300">
// //               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
// //                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
// //               </div>
// //               <span>AI-powered mock interviews</span>
// //             </div>
// //             <div className="flex items-center gap-3 text-gray-300">
// //               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
// //                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
// //               </div>
// //               <span>Real-time feedback & ratings</span>
// //             </div>
// //             <div className="flex items-center gap-3 text-gray-300">
// //               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
// //                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
// //               </div>
// //               <span>Personalized question sets</span>
// //             </div>
// //             <div className="flex items-center gap-3 text-gray-300">
// //               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
// //                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
// //               </div>
// //               <span>Progress tracking & analytics</span>
// //             </div>
// //           </div>
          
// //           {/* Trust Badge */}
// //           <div className="mt-8 inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-6 py-3">
// //             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
// //             <span className="text-purple-300 text-sm">Trusted by thousands of job seekers</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Right side: Auth Form */}
// //       <div className="flex w-full flex-col items-center justify-center p-8 lg:w-1/2">
// //         <div className="w-full max-w-md space-y-8">
// //           {/* Mobile Logo */}
// //           <div className="lg:hidden flex justify-center mb-8">
// //             <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-400 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-purple-500/30">
// //               <span className="text-xl font-bold">AI</span>
// //             </div>
// //           </div>
          
// //           {/* Mobile Title */}
// //           <div className="lg:hidden text-center mb-8">
// //             <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-100 to-purple-300 bg-clip-text text-transparent mb-2">
// //               InterviewAI
// //             </h1>
// //             <p className="text-gray-400">Sign in to master your interviews</p>
// //           </div>

// //           {/* Auth Container */}
// //           <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
// //             <div className="text-center mb-6">
// //               <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
// //               <p className="text-gray-400 mt-2">Sign in to continue your interview practice</p>
// //             </div>
            
// //             {/* Clerk SignIn Component with Custom Styling */}
// //             <SignIn 
// //               appearance={{
// //                 layout: {
// //                   socialButtonsPlacement: 'bottom',
// //                   socialButtonsVariant: 'auto',
// //                   termsPageUrl: '/terms',
// //                   privacyPageUrl: '/privacy',
// //                 },
// //                 elements: {
// //                   rootBox: 'w-full',
// //                   card: 'bg-transparent shadow-none w-full',
// //                   header: 'hidden',
// //                   headerTitle: 'hidden',
// //                   headerSubtitle: 'hidden',
                  
// //                   // Social buttons
// //                   socialButtons: 'space-y-3 mb-4',
// //                   socialButtonsBlockButton: 
// //                     'bg-gray-700/50 border border-gray-600 text-white hover:bg-gray-600/50 transition-all duration-300 rounded-lg',
// //                   socialButtonsBlockButtonText: 'text-white',
// //                   socialButtonsProviderIcon: 'filter invert',
                  
// //                   // Divider
// //                   dividerLine: 'bg-gray-600',
// //                   dividerText: 'text-gray-400',
                  
// //                   // Form fields
// //                   form: 'space-y-4',
// //                   formField: 'space-y-2',
// //                   formFieldLabel: 'text-white text-sm font-medium',
// //                   formFieldInput: 
// //                     'bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 w-full px-3 py-2',
                  
// //                   // Form actions
// //                   formButtonPrimary: 
// //                     'bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 w-full py-2',
// //                   formFieldAction: 'text-purple-400 hover:text-purple-300 transition-colors duration-300',
                  
// //                   // Footer
// //                   footer: 'hidden',
// //                   footerAction: 'hidden',
                  
// //                   // Identity preview
// //                   userButtonBox: 'hidden',
                  
// //                   // Alternative methods
// //                   alternativeMethodsBlockButton: 'text-purple-400 hover:text-purple-300 transition-colors duration-300',
// //                 },
// //                 variables: {
// //                   colorPrimary: '#8b5cf6', // purple-500
// //                   colorText: '#ffffff',
// //                   colorTextSecondary: '#9ca3af', // gray-400
// //                   colorBackground: 'transparent',
// //                   colorInputBackground: 'rgba(55, 65, 81, 0.5)', // gray-700/50
// //                   colorInputText: '#ffffff',
// //                 }
// //               }}
// //             />
// //           </div>

// //           {/* Sign Up Link */}
// //           <div className="text-center">
// //             <p className="text-gray-500 text-sm">
// //               Don't have an account?{' '}
// //               <a href="/sign-up" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold">
// //                 Sign up here
// //               </a>
// //             </p>
// //           </div>

// //           {/* Footer Note */}
// //           <div className="text-center">
// //             <p className="text-gray-500 text-xs">
// //               By continuing, you agree to our Terms of Service and Privacy Policy
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Global CSS Overrides for Clerk */}
// //       <style jsx global>{`
// //         /* Override Clerk's default white backgrounds */
// //         .cl-card, 
// //         .cl-modalContent, 
// //         .cl-userButtonPopoverCard {
// //           background: transparent !important;
// //           box-shadow: none !important;
// //         }
        
// //         /* Ensure form elements are dark */
// //         .cl-formFieldInput {
// //           background-color: rgba(55, 65, 81, 0.5) !important;
// //           border-color: rgb(75, 85, 99) !important;
// //           color: white !important;
// //         }
        
// //         .cl-formFieldInput:focus {
// //           border-color: rgb(139, 92, 246) !important;
// //           box-shadow: 0 0 0 1px rgb(139, 92, 246) !important;
// //         }
        
// //         /* Override any remaining white backgrounds */
// //         .cl-internal-1d1x4zu {
// //           background: transparent !important;
// //         }
        
// //         /* Make sure text is visible */
// //         .cl-headerTitle, 
// //         .cl-headerSubtitle,
// //         .cl-formFieldLabel {
// //           color: white !important;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }



// // import { SignIn } from '@clerk/nextjs'
// // import React from 'react';

// // export default function Page() {
 
// //   return (
// //     <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-950">
// //       {/* Left side: Hero Section */}
// //       <div className="relative hidden w-1/2 lg:flex items-center justify-center p-8">
// //         {/* Animated Background Elements */}
// //         <div className="absolute inset-0 overflow-hidden">
// //           <div className="absolute top-1/4 -left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
// //           <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
// //           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
// //         </div>
        
// //         {/* Hero Content */}
// //         <div className="relative z-10 text-center space-y-6 max-w-md">
// //           {/* Logo */}
// //           <div className="flex justify-center mb-8">
// //             <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-teal-400 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-purple-500/30">
// //               <span className="text-2xl font-bold">AI</span>
// //             </div>
// //           </div>
          
// //           <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-100 to-purple-300 bg-clip-text text-transparent">
// //             InterviewAI
// //           </h1>
// //           <p className="text-xl text-gray-400 leading-relaxed">
// //             Master interviews with AI-powered simulations and get instant feedback to improve your skills.
// //           </p>
          
// //           {/* Features List */}
// //           <div className="space-y-4 mt-8">
// //             <div className="flex items-center gap-3 text-gray-300">
// //               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
// //                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
// //               </div>
// //               <span>AI-powered mock interviews</span>
// //             </div>
// //             <div className="flex items-center gap-3 text-gray-300">
// //               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
// //                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
// //               </div>
// //               <span>Real-time feedback & ratings</span>
// //             </div>
// //             <div className="flex items-center gap-3 text-gray-300">
// //               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
// //                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
// //               </div>
// //               <span>Personalized question sets</span>
// //             </div>
// //             <div className="flex items-center gap-3 text-gray-300">
// //               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
// //                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
// //               </div>
// //               <span>Progress tracking & analytics</span>
// //             </div>
// //           </div>
          
// //           {/* Trust Badge */}
// //           <div className="mt-8 inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-6 py-3">
// //             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
// //             <span className="text-purple-300 text-sm">Trusted by thousands of job seekers</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Right side: Auth Form */}
// //       <div className="flex w-full flex-col items-center justify-center p-8 lg:w-1/2">
// //         <div className="w-full max-w-md space-y-8">
// //           {/* Mobile Logo */}
// //           <div className="lg:hidden flex justify-center mb-8">
// //             <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-400 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-purple-500/30">
// //               <span className="text-xl font-bold">AI</span>
// //             </div>
// //           </div>
          
// //           {/* Mobile Title */}
// //           <div className="lg:hidden text-center mb-8">
// //             <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-100 to-purple-300 bg-clip-text text-transparent mb-2">
// //               InterviewAI
// //             </h1>
// //             <p className="text-gray-400">Sign in to master your interviews</p>
// //           </div>

// //           {/* Auth Container */}
// //           <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
// //             <div className="text-center mb-6">
// //               <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
// //               <p className="text-gray-400 mt-2">Sign in to continue your interview practice</p>
// //             </div>
            
// //             {/* Clerk SignIn Component with Enhanced Styling */}
// //             <SignIn 
// //               appearance={{
// //                 layout: {
// //                   socialButtonsPlacement: 'bottom',
// //                   socialButtonsVariant: 'auto',
// //                 },
// //                 elements: {
// //                   // Root and card
// //                   rootBox: 'w-full',
// //                   card: 'bg-transparent shadow-none w-full p-0 m-0',
                  
// //                   // Headers
// //                   header: 'hidden',
// //                   headerTitle: 'hidden',
// //                   headerSubtitle: 'hidden',
                  
// //                   // Social buttons
// //                   socialButtons: 'space-y-3 mb-6',
// //                   socialButtonsBlockButton: 
// //                     'bg-gray-700/50 border border-gray-600 text-white hover:bg-gray-600/50 transition-all duration-300 rounded-lg py-3',
// //                   socialButtonsBlockButtonText: 'text-white text-sm',
// //                   socialButtonsProviderIcon: 'invert',
                  
// //                   // Divider
// //                   dividerLine: 'bg-gray-600 my-6',
// //                   dividerText: 'text-gray-400 text-sm',
                  
// //                   // Form fields
// //                   form: 'space-y-4',
// //                   formField: 'space-y-2',
// //                   formFieldLabel: 'text-white text-sm font-medium',
// //                   formFieldInput: 
// //                     'bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 w-full px-3 py-3 text-sm',
                  
// //                   // Form actions
// //                   formButtonPrimary: 
// //                     'bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 w-full py-3 text-sm',
// //                   formFieldAction: 'text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm',
                  
// //                   // Footer and actions
// //                   footer: 'hidden',
// //                   footerAction: 'hidden',
// //                   footerActionLink: 'text-purple-400 hover:text-purple-300',
                  
// //                   // Identity preview
// //                   userButtonBox: 'hidden',
                  
// //                   // Alternative methods
// //                   alternativeMethodsBlockButton: 'text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm',
// //                 },
// //                 variables: {
// //                   colorPrimary: '#8b5cf6',
// //                   colorText: '#ffffff',
// //                   colorTextSecondary: '#9ca3af',
// //                   colorBackground: 'transparent',
// //                   colorInputBackground: 'rgba(55, 65, 81, 0.5)',
// //                   colorInputText: '#ffffff',
// //                   colorShimmer: 'rg(139, 92, 246, 0.1)',
// //                 }
// //               }}
// //             />
// //           </div>

// //           {/* Sign Up Link */}
// //           <div className="text-center">
// //             <p className="text-gray-500 text-sm">
// //               Don't have an account?{' '}
// //               <a href="/sign-up" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold">
// //                 Sign up here
// //               </a>
// //             </p>
// //           </div>

// //           {/* Footer Note */}
// //           <div className="text-center">
// //             <p className="text-gray-500 text-xs">
// //               By continuing, you agree to our Terms of Service and Privacy Policy
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import { SignIn } from '@clerk/nextjs'
// import React from 'react';

// export default function Page() {
 
//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-950">
//       {/* Left side: Hero Section */}
//       <div className="relative hidden w-1/2 lg:flex items-center justify-center p-8">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 -left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
//         </div>
        
//         {/* Hero Content */}
//         <div className="relative z-10 text-center space-y-6 max-w-md">
//           {/* Logo */}
//           <div className="flex justify-center mb-8">
//             <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-teal-400 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-purple-500/30">
//               <span className="text-2xl font-bold">AI</span>
//             </div>
//           </div>
          
//           <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-100 to-purple-300 bg-clip-text text-transparent">
//             InterviewAI
//           </h1>
//           <p className="text-xl text-gray-400 leading-relaxed">
//             Master interviews with AI-powered simulations and get instant feedback to improve your skills.
//           </p>
          
//           {/* Features List */}
//           <div className="space-y-4 mt-8">
//             <div className="flex items-center gap-3 text-gray-300">
//               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
//                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//               </div>
//               <span>AI-powered mock interviews</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-300">
//               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
//                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//               </div>
//               <span>Real-time feedback & ratings</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-300">
//               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
//                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//               </div>
//               <span>Personalized question sets</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-300">
//               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
//                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//               </div>
//               <span>Progress tracking & analytics</span>
//             </div>
//           </div>
          
//           {/* Trust Badge */}
//           <div className="mt-8 inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-6 py-3">
//             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//             <span className="text-purple-300 text-sm">Trusted by thousands of job seekers</span>
//           </div>
//         </div>
//       </div>

//       {/* Right side: Auth Form */}
//       <div className="flex w-full flex-col items-center justify-center p-8 lg:w-1/2">
//         <div className="w-full max-w-md space-y-8">
//           {/* Mobile Logo */}
//           <div className="lg:hidden flex justify-center mb-8">
//             <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-400 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-purple-500/30">
//               <span className="text-xl font-bold">AI</span>
//             </div>
//           </div>
          
//           {/* Mobile Title */}
//           <div className="lg:hidden text-center mb-8">
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-100 to-purple-300 bg-clip-text text-transparent mb-2">
//               InterviewAI
//             </h1>
//             <p className="text-gray-400">Sign in to master your interviews</p>
//           </div>

//           {/* Auth Container */}
//           <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
//             <div className="text-center mb-6">
//               <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
//               <p className="text-gray-400 mt-2">Sign in to continue your interview practice</p>
//             </div>
            
//             {/* Clerk SignIn Component with Enhanced Styling */}
//             <SignIn 
//               appearance={{
//                 layout: {
//                   socialButtonsPlacement: 'bottom',
//                   socialButtonsVariant: 'auto',
//                   logoPlacement: 'inside',
//                 },
//                 elements: {
//                   // Root and card
//                   rootBox: 'w-full',
//                   card: 'bg-transparent shadow-none w-full p-0 m-0',
                  
//                   // Headers
//                   header: 'hidden',
//                   headerTitle: 'hidden',
//                   headerSubtitle: 'hidden',
                  
//                   // Social buttons - improved visibility
//                   socialButtons: 'space-y-3 mb-6',
//                   socialButtonsBlockButton: 
//                     'bg-gray-700/80 border border-gray-600 text-white hover:bg-gray-600/80 transition-all duration-300 rounded-lg py-3 px-4 font-medium',
//                   socialButtonsBlockButtonText: 'text-white text-sm font-normal',
//                   socialButtonsProviderIcon: 'filter-none opacity-100',
//                   socialButtonsIconButton: 'bg-gray-700/80 border border-gray-600',
                  
//                   // Divider
//                   dividerLine: 'bg-gray-600 my-6',
//                   dividerText: 'text-gray-400 text-sm',
                  
//                   // Form fields
//                   form: 'space-y-4',
//                   formField: 'space-y-2',
//                   formFieldLabel: 'text-white text-sm font-medium',
//                   formFieldInput: 
//                     'bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 w-full px-3 py-3 text-sm',
                  
//                   // Form actions
//                   formButtonPrimary: 
//                     'bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 w-full py-3 text-sm',
//                   formFieldAction: 'text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm',
                  
//                   // Footer and actions
//                   footer: 'hidden',
//                   footerAction: 'hidden',
//                   footerActionLink: 'text-purple-400 hover:text-purple-300',
                  
//                   // Identity preview
//                   userButtonBox: 'hidden',
                  
//                   // Alternative methods
//                   alternativeMethodsBlockButton: 'text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm',
                  
//                   // Remove development mode
//                   logoImage: 'hidden',
//                 },
//                 variables: {
//                   colorPrimary: '#8b5cf6',
//                   colorText: '#ffffff',
//                   colorTextSecondary: '#9ca3af',
//                   colorBackground: 'transparent',
//                   colorInputBackground: 'rgba(55, 65, 81, 0.5)',
//                   colorInputText: '#ffffff',
//                   colorShimmer: 'rgba(139, 92, 246, 0.1)',
//                   colorNeutral: '#6b7280',
//                 }
//               }}
//               routing="path"
//               path="/sign-in"
//             />
//           </div>

//           {/* Sign Up Link */}
//           <div className="text-center">
//             <p className="text-gray-500 text-sm">
//               Don't have an account?{' '}
//               <a href="/sign-up" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold">
//                 Sign up here
//               </a>
//             </p>
//           </div>

//           {/* Footer Note */}
//           <div className="text-center">
//             <p className="text-gray-500 text-xs">
//               By continuing, you agree to our Terms of Service and Privacy Policy
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import { SignIn } from '@clerk/nextjs'
import React from 'react';

export default function Page() {
 
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-950">
      {/* Left side: Hero Section */}
      <div className="relative hidden w-1/2 lg:flex items-center justify-center p-8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center space-y-6 max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-teal-400 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-purple-500/30">
              <span className="text-2xl font-bold">AI</span>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-100 to-purple-300 bg-clip-text text-transparent">
            InterviewAI
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Master interviews with AI-powered simulations and get instant feedback to improve your skills.
          </p>
          
          {/* Features List */}
          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <span>AI-powered mock interviews</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <span>Real-time feedback & ratings</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <span>Personalized question sets</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <span>Progress tracking & analytics</span>
            </div>
          </div>
          
          {/* Trust Badge */}
          <div className="mt-8 inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-purple-300 text-sm">Trusted by thousands of job seekers</span>
          </div>
        </div>
      </div>

      {/* Right side: Auth Form */}
      <div className="flex w-full flex-col items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-400 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-purple-500/30">
              <span className="text-xl font-bold">AI</span>
            </div>
          </div>
          
          {/* Mobile Title */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-100 to-purple-300 bg-clip-text text-transparent mb-2">
              InterviewAI
            </h1>
            <p className="text-gray-400">Sign in to master your interviews</p>
          </div>

          {/* Auth Container */}
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
              <p className="text-gray-400 mt-2">Sign in to continue your interview practice</p>
            </div>
            
            {/* Clerk SignIn Component with Enhanced Styling */}
            <SignIn 
              appearance={{
                layout: {
                  socialButtonsPlacement: 'bottom',
                  socialButtonsVariant: 'auto',
                  logoPlacement: 'inside',
                },
                elements: {
                  // Root and card
                  rootBox: 'w-full',
                  card: 'bg-transparent shadow-none w-full p-0 m-0',
                  
                  // Headers
                  header: 'hidden',
                  headerTitle: 'hidden',
                  headerSubtitle: 'hidden',
                  
                  // Social buttons - much more visible
                  socialButtons: 'space-y-4 mb-6',
                  socialButtonsBlockButton: 
                    'bg-gray-700 border border-gray-500 text-white hover:bg-gray-600 hover:border-gray-400 transition-all duration-300 rounded-xl py-3.5 px-4 font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02]',
                  socialButtonsBlockButtonText: 'text-white text-sm font-semibold',
                  socialButtonsProviderIcon: 'filter-none opacity-100 brightness-100 contrast-100',
                  socialButtonsIconButton: 'bg-gray-700 border border-gray-500',
                  
                  // Divider
                  dividerLine: 'bg-gray-600 my-6',
                  dividerText: 'text-gray-400 text-sm font-medium',
                  
                  // Form fields
                  form: 'space-y-4',
                  formField: 'space-y-2',
                  formFieldLabel: 'text-white text-sm font-medium',
                  formFieldInput: 
                    'bg-gray-700/60 border border-gray-500 text-white placeholder-gray-400 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 w-full px-3 py-3 text-sm',
                  
                  // Form actions
                  formButtonPrimary: 
                    'bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 w-full py-3.5 text-sm',
                  formFieldAction: 'text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium',
                  
                  // Footer and actions
                  footer: 'hidden',
                  footerAction: 'hidden',
                  footerActionLink: 'text-purple-400 hover:text-purple-300',
                  
                  // Identity preview
                  userButtonBox: 'hidden',
                  
                  // Alternative methods
                  alternativeMethodsBlockButton: 'text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium',
                  
                  // Remove development mode
                  logoImage: 'hidden',
                },
                variables: {
                  colorPrimary: '#8b5cf6',
                  colorText: '#ffffff',
                  colorTextSecondary: '#9ca3af',
                  colorBackground: 'transparent',
                  colorInputBackground: 'rgba(55, 65, 81, 0.6)',
                  colorInputText: '#ffffff',
                  colorShimmer: 'rgba(139, 92, 246, 0.1)',
                  colorNeutral: '#6b7280',
                  colorAlphaShade: '#ffffff',
                }
              }}
              routing="path"
              path="/sign-in"
            />
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Don't have an account?{' '}
              <a href="/sign-up" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold">
                Sign up here
              </a>
            </p>
          </div>

          {/* Footer Note */}
          <div className="text-center">
            <p className="text-gray-500 text-xs">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}