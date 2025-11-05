"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LoaderCircle } from 'lucide-react'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { v4 as uuidv4 } from 'uuid'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { useRouter } from "next/navigation"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { chatSession } from "@/utils/geminiAiModel";

function AddNewInterview() {
  const { user } = useUser();
  const [openDailog, setOpenDailog] = useState(false)
  const [jobPosition, setjobPosition] = useState('')
  const [jobDesc, setJobDesc] = useState('')
  const [jobExperience, setJobExperience] = useState('')
  const [loading, setLoading] = useState(false)
  const [jsonResponse, setJsonResponse] = useState()
  const router = useRouter();

  const onSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperience);

    const InputPrompt = "Job Position:" + jobPosition + ",JobDescription:" + jobDesc + " experience:" + jobExperience + ",depends on this information please give me " + process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT + " interview questions with answered in json format,give question and answered as fiels in json";

    const result = await chatSession.sendMessage(InputPrompt);
    const MockJsonResp = (result.response.text().replace('```json', '').replace('```', ''));
    console.log(JSON.parse(MockJsonResp));
    setJsonResponse(MockJsonResp);

    if (MockJsonResp) {
      const resp = await db.insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format('DD-MM-YYYY')
        }).returning({ mockId: MockInterview.mockId })

      console.log("Inserted ID:", resp)
      if(resp){
        setOpenDailog(false);
        router.push('/dashboard/interview/'+resp[0]?.mockId);
      }
    } else {
      console.log("ERROR");
    }
    setLoading(false);
  }

  return (
    <div>
      {/* Updated Card Design */}
      <div 
        className='p-8 border border-purple-500/30 rounded-2xl bg-gray-800/70 backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer transition-all duration-300 group relative overflow-hidden'
        onClick={() => setOpenDailog(true)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-purple-500/30 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <i className="fas fa-plus"></i>
          </div>
          <h2 className='font-bold text-xl text-white group-hover:text-purple-300 transition-colors duration-300'>Start New Interview</h2>
          <p className='text-gray-400 text-sm mt-2'>Create personalized AI interview</p>
        </div>
      </div>

      {/* Updated Dialog Design */}
      <Dialog open={openDailog} onOpenChange={setOpenDailog}>
        <DialogContent className="max-w-2xl bg-gray-800 border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/20">
          <DialogHeader>
            <DialogTitle className='font-bold text-2xl text-white text-center bg-gradient-to-r from-purple-500 to-teal-400 bg-clip-text text-transparent'>
              Tell Us About Your Dream Job
            </DialogTitle>
            <DialogDescription asChild>
              <form onSubmit={onSubmit} className="mt-6">
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-gray-300 text-lg">
                      Add details about your desired position to generate personalized interview questions
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-white font-semibold block mb-2 text-sm">
                        <i className="fas fa-briefcase mr-2 text-purple-400"></i>
                        Job Role / Position
                      </label>
                      <Input 
                        placeholder='Ex: Full Stack Developer, Product Manager, Data Scientist' 
                        required
                        className="bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                        onChange={(event) => setjobPosition(event.target.value)} 
                      />
                    </div>
                    
                    <div>
                      <label className="text-white font-semibold block mb-2 text-sm">
                        <i className="fas fa-code mr-2 text-teal-400"></i>
                        Job Description & Tech Stack
                      </label>
                      <Textarea 
                        placeholder="Ex: React, Node.js, PostgreSQL, AWS, Agile methodology, team leadership..."
                        required
                        className="bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:border-purple-500 focus:ring-purple-500 min-h-[100px] transition-all duration-300"
                        onChange={(event) => setJobDesc(event.target.value)} 
                      />
                    </div>
                    
                    <div>
                      <label className="text-white font-semibold block mb-2 text-sm">
                        <i className="fas fa-chart-line mr-2 text-purple-400"></i>
                        Years of Experience
                      </label>
                      <Input 
                        placeholder="Ex: 3" 
                        max="50" 
                        min="0" 
                        type="number" 
                        required
                        className="bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 rounded-lg focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                        onChange={(event) => setJobExperience(event.target.value)} 
                      />
                    </div>
                  </div>

                  {/* Tips Section */}
                  <div className="p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                    <h4 className="font-semibold text-teal-400 mb-2 flex items-center gap-2 text-sm">
                      <i className="fas fa-lightbulb"></i>
                      Pro Tips for Better Results
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Be specific about technologies and frameworks you know</li>
                      <li>• Include relevant soft skills and methodologies</li>
                      <li>• Mention any specific industry experience</li>
                    </ul>
                  </div>

                  <div className='flex gap-4 justify-end pt-4'>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setOpenDailog(false)}
                      className="border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      disabled={loading}
                      className="bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <LoaderCircle className='animate-spin w-4 h-4' />
                          Generating AI Interview...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <i className="fas fa-robot"></i>
                          Start AI Interview
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Add Font Awesome CSS */}
      <style jsx>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
      `}</style>
    </div>
  )
}

export default AddNewInterview