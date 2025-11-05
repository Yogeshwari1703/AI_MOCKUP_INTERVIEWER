"use client"

import React from 'react'
import { 
  Brain, 
  Users, 
  Rocket, 
  Target, 
  Award, 
  Star,
  TrendingUp,
  Shield,
  Globe,
  Code2,
  MessageSquare,
  Zap,
  Heart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Interviews",
      description: "Practice with intelligent AI interviewers that adapt to your responses and create realistic interview scenarios."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Get detailed insights into your performance with comprehensive ratings and improvement suggestions."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Real-time Feedback",
      description: "Receive instant feedback on your answers, communication skills, and overall interview performance."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Industry Specific",
      description: "Choose from hundreds of interview scenarios tailored to your target industry and role."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Confidence Building",
      description: "Build confidence through repeated practice in a safe, pressure-free environment."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Setup",
      description: "Get started in minutes with our intuitive interface and easy-to-use platform."
    }
  ]

  const stats = [
    { number: "10,000+", label: "Interviews Conducted" },
    { number: "95%", label: "User Satisfaction" },
    { number: "50+", label: "Industries Covered" },
    { number: "2.5x", label: "Confidence Improvement" }
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "AI Research Lead",
      description: "Former Google AI researcher with 8+ years in natural language processing",
      avatar: "👩‍💻"
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Director",
      description: "Ex-Meta product manager specializing in educational technology",
      avatar: "👨‍💼"
    },
    {
      name: "Dr. Emily Watson",
      role: "Career Advisor",
      description: "Career coach with 15+ years helping professionals land dream jobs",
      avatar: "👩‍🏫"
    },
    {
      name: "Alex Thompson",
      role: "Engineering Lead",
      description: "Full-stack developer passionate about creating seamless user experiences",
      avatar: "👨‍💻"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-purple-500/30 mx-auto mb-6">
              <Rocket className="w-8 h-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent mb-6">
              About InterviewAI
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Revolutionizing interview preparation with cutting-edge artificial intelligence. 
              We're on a mission to help job seekers build confidence and land their dream jobs 
              through realistic, adaptive practice sessions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-3"
              >
                <Link href="/dashboard/interview/new">
                  Start Practicing
                </Link>
              </Button>
              <Button 
                variant="outline"
                className="border border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-300 px-8 py-3"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                We believe that everyone deserves the opportunity to showcase their true potential 
                in job interviews. Traditional preparation methods often fall short in simulating 
                the real pressure and unpredictability of actual interviews.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                InterviewAI bridges this gap by providing an intelligent platform that not only 
                asks relevant questions but also adapts to your responses, providing a truly 
                immersive preparation experience.
              </p>
              <div className="flex items-center gap-2 text-teal-400">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">Making job interviews accessible to all</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 text-center hover:border-purple-500/30 transition-all duration-300">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose InterviewAI?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our platform combines advanced AI technology with expert career guidance 
              to provide the most comprehensive interview preparation available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-purple-500/30 mb-6 relative z-10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{feature.title}</h3>
                <p className="text-gray-400 relative z-10">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate experts from AI research, career coaching, and software development 
              working together to transform interview preparation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-teal-500/30 transition-all duration-300 text-center group"
              >
                <div className="w-20 h-20 text-4xl mb-4 mx-auto flex items-center justify-center bg-gradient-to-br from-teal-500 to-teal-400 rounded-2xl shadow-lg shadow-teal-500/30">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                <div className="text-teal-400 text-sm font-semibold mb-3">{member.role}</div>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-purple-500/30 mb-6">
                <Code2 className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Technology</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our platform leverages state-of-the-art natural language processing and 
                machine learning algorithms to create realistic interview experiences.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time speech analysis and response evaluation",
                  "Adaptive questioning based on user performance",
                  "Comprehensive performance metrics and insights",
                  "Industry-specific question databases",
                  "Continuous learning and improvement"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-teal-400/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "AI Models", value: "5+" },
                  { label: "Languages Supported", value: "10+" },
                  { label: "Response Time", value: "<1s" },
                  { label: "Accuracy Rate", value: "98%" }
                ].map((tech, index) => (
                  <div key={index} className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                    <div className="text-2xl font-bold text-white mb-1">{tech.value}</div>
                    <div className="text-gray-400 text-sm">{tech.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-teal-500/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Ace Your Next Interview?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of successful candidates who have transformed their 
              interview skills with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-3"
              >
                <Link href="/dashboard/interview/new">
                  Start Free Trial
                </Link>
              </Button>
              <Button 
                variant="outline"
                className="border border-gray-600 text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-300 px-8 py-3"
              >
                Schedule Demo
              </Button>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              No credit card required • 7-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-purple-400" />
            <span className="text-xl font-bold text-white">InterviewAI</span>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering job seekers with AI-driven interview preparation
          </p>
          
        </div>
      </footer>
    </div>
  )
}