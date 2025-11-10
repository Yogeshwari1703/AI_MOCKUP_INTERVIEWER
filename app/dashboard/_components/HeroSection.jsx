import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

const HeroSection = () => {
  const { isSignedIn, user } = useUser(); // Add this line
  const [isVisible, setIsVisible] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAnswers, setRecordedAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes per question
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  // Create refs for each section
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const tryRef = useRef(null);
  const homeRef = useRef(null);

  const questions = [
    "Can you tell me about yourself and your professional background?",
    "What motivated you to apply for this position and why do you think you're a good fit?",
    "Describe a challenging project you worked on and how you overcame the obstacles.",
    "How do you handle constructive criticism and feedback in a professional setting?",
    "Where do you see yourself in 5 years and how does this role align with your career goals?"
  ];

  // Scroll to section function
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle navigation clicks
  const handleNavClick = (sectionName, e) => {
    e.preventDefault();
    
    switch(sectionName) {
      case 'home':
        scrollToSection(homeRef);
        break;
      case 'features':
        scrollToSection(featuresRef);
        break;
      case 'how':
        scrollToSection(howItWorksRef);
        break;
      case 'try':
        scrollToSection(tryRef);
        break;
      default:
        // For home, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Scroll animation observer
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        observer.unobserve(entry.target);
      });
    }, appearOptions);
    
    fadeElements.forEach(element => {
      appearOnScroll.observe(element);
    });

    return () => {
      fadeElements.forEach(element => {
        appearOnScroll.unobserve(element);
      });
    };
  }, []);

  // Timer effect
  useEffect(() => {
    if (isRecording && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleStopRecording();
    }
  }, [isRecording, timeLeft]);

  // Start camera when component mounts
  useEffect(() => {
    startCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleButtonClick = (buttonText) => {
    if (buttonText.includes('Sign Up') || buttonText.includes('Start Free Trial') || buttonText.includes('Try Demo')) {
      // alert('Starting your InterviewAI experience...');
    } else if (buttonText.includes('Log In')) {
      // alert('Redirecting to login page...');
    } else if (buttonText.includes('Watch Demo')) {
      // Scroll to simulation section instead of showing alert
      scrollToSection(tryRef);
    }
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    setTimeLeft(180); // Reset timer to 3 minutes
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    // Save the recorded answer
    const newAnswer = {
      question: questions[currentQuestion],
      duration: 180 - timeLeft,
      timestamp: new Date().toISOString()
    };
    setRecordedAnswers(prev => [...prev, newAnswer]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(180);
      setIsRecording(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setTimeLeft(180);
      setIsRecording(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const getProgressPercentage = () => {
    return ((currentQuestion + 1) / questions.length) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100 overflow-x-hidden">
      {/* Header */}
      <header className="fixed w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-5">
            <a 
              href="#" 
              className="flex items-center gap-2 text-2xl font-bold text-white"
              onClick={(e) => handleNavClick('home', e)}
            >
              <i className="fas fa-robot text-purple-500 text-2xl"></i>
              <span className="bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent">InterviewAI</span>
            </a>
            
            <div className="hidden md:flex gap-8">
              <a 
                href="#home" 
                className="text-gray-400 hover:text-white font-medium transition-colors duration-300 relative group"
                onClick={(e) => handleNavClick('home', e)}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#features" 
                className="text-gray-400 hover:text-white font-medium transition-colors duration-300 relative group"
                onClick={(e) => handleNavClick('features', e)}
              >
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#how" 
                className="text-gray-400 hover:text-white font-medium transition-colors duration-300 relative group"
                onClick={(e) => handleNavClick('how', e)}
              >
                How It Works?
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              <a 
                href="#try" 
                className="text-gray-400 hover:text-white font-medium transition-colors duration-300 relative group"
                onClick={(e) => handleNavClick('try', e)}
              >
                Try?
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
            </div>
            <div className="flex gap-4">
              {isSignedIn ? (
                // Show Dashboard button for logged-in users
                <button 
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-teal-400 text-white rounded-lg font-semibold shadow-lg shadow-purple-500/30 hover:bg-gradient-to-r hover:from-purple-600 hover:to-teal-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center gap-2"
                >
                  <Link href="/dashboard" className="flex items-center gap-2">
                    <i className="fas fa-tachometer-alt"></i>
                    Go to Dashboard
                  </Link>
                </button>
              ) : (
                // Show Login/Signup buttons for logged-out users
                <>
                  <button 
                    className="px-6 py-3 border border-purple-500 text-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    onClick={() => handleButtonClick('Log In')}
                  >
                    <Link href="/dashboard" className="block w-full h-full">
                      Log In
                    </Link>
                  </button>
                  <button 
                    className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold shadow-lg shadow-purple-500/30 hover:bg-purple-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    onClick={() => handleButtonClick('Sign Up Free')}
                  >
                    <Link href="/dashboard" className="block w-full h-full">
                      Sign Up Free
                    </Link>
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - Add ref for home */}
      <section 
        ref={homeRef}
        className="pt-40 pb-20 bg-gradient-to-br from-gray-900 to-gray-950 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/15 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-purple-300 bg-clip-text text-transparent leading-tight">
                Master Interviews with AI-Powered Simulations
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                InterviewAI uses advanced artificial intelligence to create realistic interview scenarios, provide instant feedback, and help you improve your interview skills with confidence.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <button 
                  className="px-8 py-4 bg-purple-500 text-white rounded-lg font-semibold text-lg shadow-lg shadow-purple-500/30 hover:bg-purple-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  onClick={() => handleButtonClick('Start Free Trial')}
                >
                  <Link href="/dashboard" className="block w-full h-full">
                      Start Practicing Now
                   </Link>
                  
                </button>
                <button 
                  className="px-8 py-4 border border-purple-500 text-purple-500 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  onClick={() => handleButtonClick('Watch Demo')}
                >
                  Watch Demo
                </button>
              </div>
              <div className="inline-flex items-center gap-3 bg-purple-500/20 border border-purple-500 rounded-full px-6 py-3 mt-8 text-purple-300 shadow-lg shadow-purple-500/20">
                <i className="fas fa-brain text-purple-400"></i>
                <span className="font-medium">Powered by Advanced AI Technology</span>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-purple-500/30 rounded-2xl blur-2xl -z-10 animate-pulse"></div>
              <img 
                src="https://miro.medium.com/v2/resize:fit:650/1*1sIfrB5FpxSuh9q8gs87SQ.jpeg" 
                alt="AI Interview Platform" 
                className="w-full rounded-2xl shadow-2xl transform transition-transform duration-500 border border-purple-500/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Add ref */}
      {/* Features Section - Add ref */}
<section 
  ref={featuresRef}
  className="py-20 bg-gray-800/50 relative"
>
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Advanced AI Features</h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        Our platform offers cutting-edge technology to prepare you for any interview scenario
      </p>
    </div>
    
    {/* Main Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {[
        { id: 'feature1', icon: 'fa-robot', title: 'Adaptive AI Interviewers', desc: 'Practice with AI that adapts to your responses, creating unique follow-up questions in real-time.' },
        { id: 'feature2', icon: 'fa-chart-bar', title: 'Behavioral Analysis', desc: 'Get insights on your body language, tone, and confidence levels with our advanced analysis.' },
        { id: 'feature3', icon: 'fa-briefcase', title: 'Industry-Specific Scenarios', desc: 'Choose from hundreds of interview scenarios tailored to your target industry and role.' }
      ].map((feature, index) => (
        <div 
          key={feature.id}
          id={feature.id}
          className={`fade-in bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-400 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden group ${
            isVisible[feature.id] ? 'visible' : ''
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-purple-500/30 mb-6 relative z-10">
            <i className={`fas ${feature.icon}`}></i>
          </div>
          <h3 className="text-xl font-bold mb-4 relative z-10">{feature.title}</h3>
          <p className="text-gray-400 relative z-10">{feature.desc}</p>
        </div>
      ))}
    </div>

    {/* Feature Highlights */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50">
      {[
        {
          icon: "fa-brain",
          title: "AI-Powered Feedback",
          description: "Real-time analysis of your interview performance"
        },
        {
          icon: "fa-sync-alt",
          title: "Unlimited Questions",
          description: "AI generates fresh questions for every session"
        },
        {
          icon: "fa-chart-line",
          title: "Progress Tracking",
          description: "Monitor your improvement over time"
        }
      ].map((feature, index) => (
        <div key={index} className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-xl flex items-center justify-center text-lg shadow-lg shadow-purple-500/30 mx-auto mb-3">
            <i className={`fas ${feature.icon}`}></i>
          </div>
          <h5 className="font-semibold text-white text-sm mb-1">{feature.title}</h5>
          <p className="text-gray-400 text-xs">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* How It Works - Add ref */}
      <section 
        ref={howItWorksRef}
        className="py-20 bg-gray-900 relative"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get interview-ready in just three simple steps
            </p>
          </div>
          <div className="relative flex flex-col md:flex-row justify-between mt-12">
            <div className="absolute top-12 left-1/4 right-1/4 h-1 bg-gradient-to-r from-purple-500 to-teal-400 z-0 hidden md:block"></div>
            {[
              { id: 'step1', number: '1', title: 'Select Interview Type', desc: 'Choose from various job roles, industries, and difficulty levels' },
              { id: 'step2', number: '2', title: 'Practice with AI', desc: 'Engage in realistic conversations with our advanced AI interviewer' },
              { id: 'step3', number: '3', title: 'Get Detailed Feedback', desc: 'Receive comprehensive analysis and personalized improvement tips' }
            ].map((step, index) => (
              <div 
                key={step.id}
                id={step.id}
                className={`fade-in text-center relative z-10 mb-12 md:mb-0 flex-1 ${
                  isVisible[step.id] ? 'visible' : ''
                }`}
              >
                <div className="w-20 h-20 bg-gray-800 border-2 border-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-purple-500 shadow-lg shadow-purple-500/30 mx-auto mb-6 transition-all duration-300 hover:bg-purple-500 hover:text-white hover:scale-110 group">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Demo Section - Add ref for try section */}
      <section 
        ref={tryRef}
        className="py-20 bg-gray-800/50 relative"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience AI Interview Simulation</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Practice with realistic interview questions and get AI-powered feedback
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Questions Panel */}
            <div className="flex-1 bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/20">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-purple-400">Question {currentQuestion + 1} of {questions.length}</h3>
                  <span className="text-sm text-gray-400">
                    {recordedAnswers.length}/{questions.length} completed
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-teal-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${getProgressPercentage()}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {questions.map((question, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                      index === currentQuestion
                        ? 'border-purple-500 bg-purple-500/20'
                        : 'border-gray-600 bg-gray-700/50 hover:border-purple-400/50'
                    } ${
                      recordedAnswers[index] ? 'bg-teal-500/10 border-teal-500/50' : ''
                    }`}
                    onClick={() => {
                      setCurrentQuestion(index);
                      setTimeLeft(180);
                      setIsRecording(false);
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === currentQuestion
                          ? 'bg-purple-500 text-white'
                          : recordedAnswers[index]
                          ? 'bg-teal-500 text-white'
                          : 'bg-gray-600 text-gray-300'
                      }`}>
                        {index + 1}
                      </div>
                      <p className="text-sm flex-1">
                        {question}
                        {recordedAnswers[index] && (
                          <span className="block text-xs text-teal-400 mt-1">
                            ✓ Answered ({formatTime(recordedAnswers[index].duration)})
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:border-purple-500 hover:text-purple-400 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={handleNextQuestion}
                  disabled={currentQuestion === questions.length - 1}
                  className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:border-purple-500 hover:text-purple-400 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>

            {/* Video Recording Panel */}
            <div className="flex-1 bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/20">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-white">Current Question</h3>
                <p className="text-gray-300 text-lg bg-gray-700/50 p-4 rounded-lg border-l-4 border-purple-500">
                  {questions[currentQuestion]}
                </p>
              </div>

              {/* Video Preview */}
              <div className="relative bg-black rounded-xl overflow-hidden mb-4 aspect-video">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  className="w-full h-full object-cover"
                />
                {isRecording && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-500/90 text-white px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">RECORDING</span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/70 text-white px-3 py-1 rounded-full">
                  <i className="fas fa-microphone text-green-400"></i>
                  <span className="text-sm">Microphone Active</span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/70 text-white px-3 py-1 rounded-full">
                  <i className="fas fa-video text-green-400"></i>
                  <span className="text-sm">Camera Active</span>
                </div>
              </div>

              {/* Timer and Controls */}
              <div className="text-center mb-6">
                <div className={`text-3xl font-mono font-bold mb-4 ${
                  timeLeft < 60 ? 'text-red-400' : 'text-white'
                }`}>
                  {formatTime(timeLeft)}
                </div>
                <div className="text-sm text-gray-400 mb-4">
                  {timeLeft < 60 
                    ? 'Less than 1 minute remaining' 
                    : 'Record your answer (3 minutes max)'
                  }
                </div>
              </div>

              {/* Recording Controls */}
              <div className="flex justify-center gap-4">
                {!isRecording ? (
                  <button
                    onClick={handleStartRecording}
                    disabled={recordedAnswers[currentQuestion]}
                    className="px-8 py-3 bg-red-500 text-white rounded-lg font-semibold shadow-lg shadow-red-500/30 hover:bg-red-600 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <i className="fas fa-record-vinyl mr-2"></i>
                    Start Recording
                  </button>
                ) : (
                  <button
                    onClick={handleStopRecording}
                    className="px-8 py-3 bg-gray-600 text-white rounded-lg font-semibold shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                  >
                    <i className="fas fa-stop mr-2"></i>
                    Stop Recording
                  </button>
                )}
                
                {recordedAnswers[currentQuestion] && (
                  <button
                    onClick={() => {
                      // Play recorded answer logic would go here
                      alert('log in to use this feature');
                    }}
                    className="px-6 py-3 border border-teal-500 text-teal-400 rounded-lg font-semibold hover:bg-teal-500/10 transition-all duration-300"
                  >
                    <i className="fas fa-play mr-2"></i>
                    Review Answer
                  </button>
                )}
              </div>

              {/* Tips */}
              <div className="mt-6 p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                <h4 className="font-semibold text-teal-400 mb-2 flex items-center gap-2">
                  <i className="fas fa-lightbulb"></i>
                  Tips for this question
                </h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Be concise but comprehensive in your answer</li>
                  <li>• Maintain eye contact with the camera</li>
                  <li>• Speak clearly and at a moderate pace</li>
                  <li>• Structure your answer with a clear beginning, middle, and end</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="px-6 py-3 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
              <i className="fas fa-redo mr-2"></i>
              Restart Simulation
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-teal-400 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <i className="fas fa-chart-line mr-2"></i>
              View AI Feedback
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hear from users who landed their dream jobs with InterviewAI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                id: 'testimonial1', 
                text: "InterviewAI's AI interviewer was incredibly realistic. The feedback on my technical answers helped me identify weak spots I didn't even know I had.",
                name: "Jessica Smith",
                role: "Software Engineer at TechCorp",
                initials: "JS"
              },
              { 
                id: 'testimonial2', 
                text: "As a non-native English speaker, I was nervous about interviews. InterviewAI's speech analysis helped me improve my communication skills dramatically.",
                name: "Ahmed Rahman",
                role: "Product Manager at GlobalTech",
                initials: "AR"
              },
              { 
                id: 'testimonial3', 
                text: "The industry-specific questions were spot on. I felt completely prepared and confident during my actual interviews thanks to InterviewAI.",
                name: "Maria Perez",
                role: "Marketing Director at BrandVision",
                initials: "MP"
              }
            ].map((testimonial, index) => (
              <div 
                key={testimonial.id}
                id={testimonial.id}
                className={`fade-in bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-purple-500 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  isVisible[testimonial.id] ? 'visible' : ''
                }`}
              >
                <div className="text-gray-400 italic mb-6 relative">
                  <span className="absolute -top-4 -left-2 text-6xl text-purple-500 opacity-30">"</span>
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-teal-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/30">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-teal-400 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Ace Your Next Interview?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of job seekers who have improved their interview skills with InterviewAI
          </p>
          <button 
            className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            onClick={() => handleButtonClick('Start Your Free Trial Now')}
          >
            <Link href="/dashboard" className="block w-full h-full">
                      Start Your Free Trial Now
            </Link>
            
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-teal-400">InterviewAI</h3>
              <p className="text-gray-400 mb-6">
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
            <div>
              <h3 className="text-xl font-bold mb-6 text-teal-400">Product</h3>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'Use Cases', 'Integrations'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-teal-400">Resources</h3>
              <ul className="space-y-3">
                {['Blog', 'Interview Tips', 'Tutorials', 'Support'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-teal-400">Company</h3>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Contact', 'Privacy Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; 2023 InterviewAI. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Add CSS for fade-in animations */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
