"use client";

import React,{useState} from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faVideo, faChartLine, faLaptopCode, faChartBar, faBullhorn, faClock, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';


const HeroSection = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All Industries');

  const categories = ['All Industries', 'Technology', 'Business', 'Healthcare', 'Creative'];

  const router=useRouter();
  return (
    <>
    <section className="relative bg-blue-500 text-white text-center  bg-cover bg-center py-65" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80)'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/85 to-indigo-800/85 "></div>
        <div className="container mx-auto px-5 relative max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-5">Ace Your Next Interview with CareerCraft AI</h1>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Practice with our AI-powered interview platform and get detailed feedback on your responses, tone, and body language.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
    
            <button  onClick={()=>router.push("/dashboard")} className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow text-center">Start Free Trial</button>
         
            <a href="#" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-500 transition-colors text-center">Watch Demo</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-indigo-800 mb-4">Why Practice with InterviewAI?</h2>
            <p className="text-slate-500">Our platform provides everything you need to prepare for your next job interview</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center transition-transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-5 text-blue-500 text-3xl shadow-md shadow-blue-200">
                <FontAwesomeIcon icon={faBrain} />
              </div>
              <h3 className="text-xl font-semibold font-poppins text-indigo-800 mb-4">AI-Powered Feedback</h3>
              <p className="text-slate-500">Get detailed analysis of your answers, including content relevance, clarity, and confidence level.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center transition-transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-5 text-blue-500 text-3xl shadow-md shadow-blue-200">
                <FontAwesomeIcon icon={faVideo} className="text-3xl" />
              </div>
              <h3 className="text-xl font-semibold font-poppins text-indigo-800 mb-4">Realistic Practice</h3>
              <p className="text-slate-500">Experience realistic interview simulations with AI interviewers that adapt to your responses.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 text-center transition-transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-5 text-blue-500 text-3xl shadow-md shadow-blue-200">
                <FontAwesomeIcon icon={faChartLine} className="text-3xl" />

              </div>
              <h3 className="text-xl font-semibold font-poppins text-indigo-800 mb-4">Progress Tracking</h3>
              <p className="text-slate-500">Monitor your improvement over time with detailed analytics and personalized recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interview Types Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-indigo-800 mb-4">Practice by Industry</h2>
            <p className="text-slate-500">Choose from various interview types tailored to specific industries and roles</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(category => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full border border-slate-300 font-medium transition-colors ${activeCategory === category ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-slate-700 hover:bg-blue-500 hover:text-white hover:border-blue-500'}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 transition-transform hover:-translate-y-1">
              <div className="h-40 bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center text-white text-4xl">
                <FontAwesomeIcon icon={faLaptopCode} className="text-4xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-poppins text-indigo-800 mb-3">Software Engineering</h3>
                <p className="text-slate-500 mb-4">Practice technical interviews, coding challenges, and system design questions.</p>
                <div className="flex justify-between text-slate-500 text-sm mb-4">
                  <span>Difficulty:</span>
                  <span>Intermediate to Advanced</span>
                </div>
                <div className="flex justify-between mt-5">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <FontAwesomeIcon icon={faClock} />
                    <span>30-60 min</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <span>5 Questions</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 transition-transform hover:-translate-y-1">
              <div className="h-40 bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center text-white text-4xl">
                <FontAwesomeIcon icon={faChartBar} className="text-4xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-poppins text-indigo-800 mb-3">Data Science</h3>
                <p className="text-slate-500 mb-4">Statistical questions, machine learning concepts, and case studies.</p>
                <div className="flex justify-between text-slate-500 text-sm mb-4">
                  <span>Difficulty:</span>
                  <span>Intermediate</span>
                </div>
                <div className="flex justify-between mt-5">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <FontAwesomeIcon icon={faClock} />
                    <span>45 min</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                   <FontAwesomeIcon icon={faQuestionCircle} />
                    <span>5 Questions</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 transition-transform hover:-translate-y-1">
              <div className="h-40 bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center text-white text-4xl">
                <FontAwesomeIcon icon={faBullhorn} className="text-4xl" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-poppins text-indigo-800 mb-3">Marketing</h3>
                <p className="text-slate-500 mb-4">Strategy questions, campaign analysis, and situational interviews.</p>
                <div className="flex justify-between text-slate-500 text-sm mb-4">
                  <span>Difficulty:</span>
                  <span>Beginner to Intermediate</span>
                </div>
                <div className="flex justify-between mt-5">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <FontAwesomeIcon icon={faClock} />
                    <span>35 min</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <FontAwesomeIcon icon={faQuestionCircle} />

                    <span>5 Questions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-indigo-800 mb-4">How It Works</h2>
            <p className="text-slate-500">Get interview-ready in just a few simple steps</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-10 left-20 right-20 h-1 bg-slate-200 z-0"></div>
            
            <div className="relative z-10 text-center mb-12 md:mb-0 md:w-1/4 px-4">
              <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5 shadow-lg shadow-blue-200">1</div>
              <h3 className="text-lg font-semibold font-poppins text-indigo-800 mb-3">Choose Interview Type</h3>
              <p className="text-slate-500">Select from various industries and difficulty levels based on your needs.</p>
            </div>
            
            <div className="relative z-10 text-center mb-12 md:mb-0 md:w-1/4 px-4">
              <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5 shadow-lg shadow-blue-200">2</div>
              <h3 className="text-lg font-semibold font-poppins text-indigo-800 mb-3">Practice with AI</h3>
              <p className="text-slate-500">Answer questions while our AI records and analyzes your responses.</p>
            </div>
            
            <div className="relative z-10 text-center mb-12 md:mb-0 md:w-1/4 px-4">
              <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5 shadow-lg shadow-blue-200">3</div>
              <h3 className="text-lg font-semibold font-poppins text-indigo-800 mb-3">Get Feedback</h3>
              <p className="text-slate-500">Receive detailed feedback on your content, delivery, and body language.</p>
            </div>
            
            <div className="relative z-10 text-center md:w-1/4 px-4">
              <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5 shadow-lg shadow-blue-200">4</div>
              <h3 className="text-lg font-semibold font-poppins text-indigo-800 mb-3">Improve & Repeat</h3>
              <p className="text-slate-500">Track your progress over time and continue practicing to improve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-indigo-800 mb-4">Success Stories</h2>
            <p className="text-slate-500">Hear from people who landed their dream jobs with InterviewAI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="text-slate-800 mb-5 italic relative">
                <span className="absolute -top-5 -left-2 text-6xl text-blue-300 opacity-20 font-serif">"</span>
                InterviewAI helped me tremendously during my job search. The detailed feedback on my responses and body language allowed me to improve significantly. I landed a job at Google after practicing with the platform!
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">SD</div>
                <div>
                  <h4 className="font-semibold font-poppins text-indigo-800">Sarah Daniels</h4>
                  <p className="text-slate-500 text-sm">Software Engineer at Google</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="text-slate-800 mb-5 italic relative">
                <span className="absolute -top-5 -left-2 text-6xl text-blue-300 opacity-20 font-serif">"</span>
                As a non-native English speaker, I was nervous about interviews. InterviewAI not only helped me with my answers but also improved my pronunciation and confidence. Highly recommended!
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">MR</div>
                <div>
                  <h4 className="font-semibold font-poppins text-indigo-800">Miguel Rodriguez</h4>
                  <p className="text-slate-500 text-sm">Data Analyst at Microsoft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-800 text-white text-center">
        <div className="container mx-auto px-5 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-5">Start Your Interview Preparation Today</h2>
          <p className="text-lg mb-10 opacity-90">
            Join thousands of users who have improved their interview skills and landed their dream jobs with InterviewAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow text-center">Get Started for Free</a>
            <a href="#" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-500 transition-colors text-center">View Pricing Plans</a>
          </div>
        </div>
      </section>
      </>
  );
};

export default HeroSection;
