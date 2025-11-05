// import { SignUp } from '@clerk/nextjs'

// export default function Page() {
//   return <SignUp
//       afterSignUpUrl="/dashboard"    // redirect to your dashboard after sign up
//       signInUrl="/sign-in"           // link to your custom sign-in page
//     />
// }




// import { SignUp } from '@clerk/nextjs'
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
//             Join InterviewAI
//           </h1>
//           <p className="text-xl text-gray-400 leading-relaxed">
//             Start your journey to interview mastery with AI-powered simulations and personalized feedback.
//           </p>
          
//           {/* Benefits List */}
//           <div className="space-y-4 mt-8">
//             <div className="flex items-center gap-3 text-gray-300">
//               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
//                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//               </div>
//               <span>Unlimited mock interviews</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-300">
//               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
//                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//               </div>
//               <span>Instant AI feedback & ratings</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-300">
//               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
//                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//               </div>
//               <span>Industry-specific questions</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-300">
//               <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
//                 <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//               </div>
//               <span>Track your progress over time</span>
//             </div>
//           </div>
          
//           {/* Success Stats */}
//           <div className="mt-8 grid grid-cols-2 gap-4 text-center">
//             <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
//               <div className="text-2xl font-bold text-white">10K+</div>
//               <div className="text-gray-400 text-sm">Users</div>
//             </div>
//             <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
//               <div className="text-2xl font-bold text-white">95%</div>
//               <div className="text-gray-400 text-sm">Success Rate</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right side: SignUp Form */}
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
//               Join InterviewAI
//             </h1>
//             <p className="text-gray-400">Create your account to get started</p>
//           </div>

//           {/* SignUp Container */}
//           <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
//             <div className="text-center mb-6">
//               <h2 className="text-2xl font-bold text-white">Create Account</h2>
//               <p className="text-gray-400 mt-2">Start mastering interviews today</p>
//             </div>
            
//             {/* Clerk SignUp Component */}
//             <SignUp 
//               afterSignUpUrl="/dashboard"
//               signInUrl="/sign-in"
//               appearance={{
//                 elements: {
//                   rootBox: "w-full",
//                   card: "bg-transparent shadow-none",
//                   headerTitle: "text-white hidden",
//                   headerSubtitle: "text-gray-400 hidden",
//                   socialButtonsBlock: "space-y-3",
//                   socialButtonsBlockButton: 
//                     "bg-gray-700/50 border border-gray-600 text-white hover:bg-gray-600/50 transition-all duration-300",
//                   formFieldInput: 
//                     "bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500",
//                   formButtonPrimary: 
//                     "bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300",
//                   footer: "hidden",
//                   formFieldLabel: "text-white",
//                   formHeaderTitle: "text-white",
//                   formHeaderSubtitle: "text-gray-400"
//                 }
//               }}
//             />
//           </div>

//           {/* Sign In Link */}
//           <div className="text-center">
//             <p className="text-gray-500 text-sm">
//               Already have an account?{' '}
//               <a href="/sign-in" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold">
//                 Sign in here
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { SignUp } from '@clerk/nextjs'
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
            Join InterviewAI
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Start your journey to interview mastery with AI-powered simulations and personalized feedback.
          </p>
          
          {/* Benefits List */}
          <div className="space-y-4 mt-8">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <span>Unlimited mock interviews</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <span>Instant AI feedback & ratings</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <span>Industry-specific questions</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <span>Track your progress over time</span>
            </div>
          </div>
          
          {/* Success Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-center">
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-gray-400 text-sm">Users</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-gray-400 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: SignUp Form */}
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
              Join InterviewAI
            </h1>
            <p className="text-gray-400">Create your account to get started</p>
          </div>

          {/* SignUp Container */}
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white">Create Account</h2>
              <p className="text-gray-400 mt-2">Start mastering interviews today</p>
            </div>
            
            {/* Clerk SignUp Component */}
            <SignUp 
              afterSignUpUrl="/dashboard"
              signInUrl="/sign-in"
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
                  
                  // Social buttons - matching sign-in style
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
              path="/sign-up"
            />
          </div>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Already have an account?{' '}
              <a href="/sign-in" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold">
                Sign in here
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