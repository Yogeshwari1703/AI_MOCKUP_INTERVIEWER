"use client"
import React, { useState } from 'react';
import Link from 'next/link';


const HelpPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqItems = [
    {
      id: 1,
      question: "How does the AI analyze my interview responses?",
      answer: "Our advanced AI evaluates your responses across multiple dimensions: content relevance, communication skills, confidence indicators, and industry-specific knowledge. Using natural language processing and machine learning, it provides actionable feedback to help you improve your interview performance."
    },
    {
      id: 2,
      question: "Will I run out of practice questions?",
      answer: "Never! Our AI generates unique, tailored questions for every session. With 2,100+ base questions and infinite AI-generated variations, you'll always have fresh, relevant practice material. The system adapts to your industry, experience level, and specific learning needs."
    },
    {
      id: 3,
      question: "How accurate is the AI feedback compared to human recruiters?",
      answer: "Our AI system achieves 94% correlation with feedback from experienced HR professionals. It's trained on over 10,000 interview evaluations and continuously improves through machine learning. For critical assessments, we recommend supplementing with human feedback when possible."
    },
    {
      id: 4,
      question: "Can I customize interview scenarios for specific companies?",
      answer: "Yes! Premium users can create custom interview sets targeting specific companies like Google, Amazon, McKinsey, and more. You can also upload job descriptions to generate tailored questions and practice sessions."
    },
    {
      id: 5,
      question: "How do you ensure the privacy and security of my data?",
      answer: "We employ enterprise-grade security measures including end-to-end encryption, secure data storage, and regular security audits. Your interview recordings are automatically deleted after 30 days unless you choose to archive them, and we never share your personal data with third parties."
    },
    {
      id: 6,
      question: "Does the AI create new questions based on my performance?",
      answer: "Absolutely! Our AI dynamically generates follow-up questions based on your previous answers, creating personalized interview scenarios that challenge your specific weak points and reinforce your strengths in real-time."
    }
  ];

  const helpCategories = [
    {
      icon: "fa-rocket",
      title: "Quick Start Guide",
      description: "Get up and running in minutes with our step-by-step onboarding process and first interview tutorial.",
      link: "/help/getting-started"
    },
    {
      icon: "fa-microphone",
      title: "Interview Preparation",
      description: "Master different interview formats with unlimited AI-generated questions tailored to your needs.",
      link: "/help/preparation"
    },
    {
      icon: "fa-chart-line",
      title: "Performance Analytics",
      description: "Understand your feedback reports, track progress over time, and identify key areas for improvement.",
      link: "/help/analytics"
    },
    {
      icon: "fa-brain",
      title: "AI Question Generation",
      description: "Learn how our AI creates personalized questions and adapts to your interview style and goals.",
      link: "/help/ai-features"
    },
    {
      icon: "fa-crown",
      title: "Premium Features",
      description: "Explore advanced capabilities including custom interviews, detailed analytics, and personalized coaching.",
      link: "/help/premium"
    },
    {
      icon: "fa-shield-alt",
      title: "Account & Security",
      description: "Manage your subscription, update payment methods, and configure privacy settings.",
      link: "/help/account"
    }
  ];

  const successStories = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Meta",
      story: "The AI-generated questions were incredibly realistic and always fresh. I never encountered the same question twice!",
      improvement: "87% better technical communication"
    },
    {
      name: "Marcus Johnson",
      role: "Product Manager at Google",
      story: "What amazed me was how the AI created follow-up questions based on my answers - just like a real interviewer would.",
      improvement: "5 job offers in 2 months"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Healthcare Consultant at BCG",
      story: "The unlimited question bank meant I could practice for hours without repetition. Perfect for intensive preparation.",
      improvement: "Successfully transitioned careers"
    }
  ];

  const aiFeatures = [
    {
      icon: "fa-infinity",
      title: "Unlimited Questions",
      description: "AI generates fresh, unique questions for every practice session"
    },
    {
      icon: "fa-user-edit",
      title: "Personalized Content",
      description: "Questions tailored to your industry, role, and experience level"
    },
    {
      icon: "fa-robot",
      title: "Adaptive Follow-ups",
      description: "Dynamic follow-up questions based on your previous responses"
    },
    {
      icon: "fa-sync",
      title: "Continuous Learning",
      description: "System improves and generates better questions over time"
    }
  ];

  const contactOptions = [
    {
      icon: "fa-life-ring",
      title: "24/7 Support",
      description: "Get immediate assistance from our expert support team via live chat or email.",
      response: "Typically replies in < 2 hours",
      action: "#support"
    },
    {
      icon: "fa-graduation-cap",
      title: "Learning Resources",
      description: "Access our comprehensive library of interview guides, templates, and video tutorials.",
      response: "100+ resources available",
      action: "/resources"
    },
    {
      icon: "fa-users",
      title: "Community Forum",
      description: "Connect with other users, share experiences, and get advice from interview experts.",
      response: "10,000+ active members",
      action: "/community"
    },
    {
      icon: "fa-calendar",
      title: "Live Workshops",
      description: "Join weekly live sessions with HR professionals and career coaches.",
      response: "Free for premium users",
      action: "/workshops"
    }
  ];

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const filteredFaqs = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-100">
      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-purple-500/20 border border-purple-500 rounded-full px-6 py-3 mb-6 text-purple-300 shadow-lg shadow-purple-500/20">
              <i className="fas fa-infinity text-purple-400"></i>
              <span className="font-medium">Unlimited AI-Generated Questions</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-purple-300 bg-clip-text text-transparent">
              Never Run Out of Practice Questions
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our AI generates fresh, tailored interview questions for every session. With 2,100+ base questions and infinite variations, 
              you'll always have unique, challenging scenarios to practice with.
            </p>
            
            {/* Search Box */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search for answers, guides, or contact support..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-lg"
              />
              <button className="absolute right-2 top-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-teal-400 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                <i className="fas fa-search mr-2"></i>
                Find Answers
              </button>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: "10,000+", label: "Users Helped" },
                { number: "94%", label: "Success Rate" },
                { number: "2,100+", label: "Base Questions + AI Generation" },
                { number: "∞", label: "Unique Variations" }
              ].map((stat, index) => (
                <div key={index} className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-300 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Features Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Smart Question Generation</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our AI doesn't just recycle questions - it creates personalized interview experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-purple-500/30 mx-auto mb-4">
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Help Categories */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Get the Support You Need</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive resources for every stage of your interview preparation journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpCategories.map((category, index) => (
                <Link
                  key={index}
                  href={category.link}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-purple-500/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className={`fas ${category.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="mt-6 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    <span className="text-sm font-medium">Explore Guide</span>
                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Success Stories */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                See how our unlimited AI-generated questions helped professionals land their dream jobs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{story.name}</h4>
                      <p className="text-teal-400 text-sm">{story.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">"{story.story}"</p>
                  <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-xs">
                    <i className="fas fa-chart-line"></i>
                    <span>{story.improvement}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Quick answers to common questions about InterviewAI
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl mb-4 border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-purple-500/30"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-700/30 transition-colors duration-300"
                  >
                    <span className="text-lg font-semibold text-white pr-4 text-left">{faq.question}</span>
                    <i
                      className={`fas fa-chevron-down text-purple-400 transform transition-transform duration-300 flex-shrink-0 ${
                        activeFaq === faq.id ? 'rotate-180' : ''
                      }`}
                    ></i>
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      activeFaq === faq.id ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Get Personalized Support</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our team is dedicated to helping you achieve interview success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.action}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-purple-500/30 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className={`fas ${option.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white text-center">{option.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed text-center">
                    {option.description}
                  </p>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                      <span className="text-sm font-medium">Access Now</span>
                      <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform duration-300"></i>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      {option.response}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

    </div>
  );
};

export default HelpPage;