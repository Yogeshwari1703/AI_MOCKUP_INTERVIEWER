"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LoaderCircle } from 'lucide-react'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { v4 as uuidv4 } from 'uuid' // added missing import
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
  const router=useRouter();

  const onSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperience);

    const InputPrompt = "Job Position:" + jobPosition + ",JobDescription:" + jobDesc + " experience:" + jobExperience + ",depends on this information please give me " + process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT + " interview questions with answered in json format,give question and answered as fiels in json";

    const result = await chatSession.sendMessage(InputPrompt);
    const MockJsonResp = (result.response.text().replace('```json', '').replace('```', ''));
    console.log(JSON.parse(MockJsonResp));
    setJsonResponse(MockJsonResp); // fixed variable name

    if (MockJsonResp) { // fixed variable name
      const resp = await db.insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress, // fixed typo
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
    // router.push('/dashboard/interview'+resp[0]?.mockId);
  }

  return (
    <div>
      <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer' onClick={() => setOpenDailog(true)}>
        <h2 className='font-bold text-lg text-center'>+ Add New</h2> {/* fixed spacing */}
      </div>
      <Dialog open={openDailog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className='font-bold text-2xl'>Tell Us more about your job interests</DialogTitle>
            <DialogDescription asChild>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>
                    Add Details about your job position/role, job description and year
                  </h2>
                  <div className='mt-7 my-3' >
                    <label>Job Role/Job Position</label>
                    <Input placeholder='Ex. full stack developer' required
                      onChange={(event) => setjobPosition(event.target.value)} />
                  </div>
                  <div className='my-3' >
                    <label>Job Description/Tech Stack (In Short)</label>
                    <Textarea placeholder="Ex.React,Angular,NodeJs,MySql etc" required
                      onChange={(event) => setJobDesc(event.target.value)} />
                  </div>
                  <div className='my-3' >
                    <label>Years of Experience</label>
                    <Input placeholder="Ex. 2" max="50" min="0" type="number" required
                      onChange={(event) => setJobExperience(event.target.value)} />
                  </div>
                  <div className='flex gap-5 justify-end'>
                    <Button type="button" variant="ghost" onClick={() => setOpenDailog(false)}>Cancel</Button> {/* fixed typo */}
                    <Button type="submit" disabled={loading}>
                      {loading ?
                        <>
                          <LoaderCircle className='animate-spin' /> Generating from AI
                        </> : 'Start Interview'
                      }
                    </Button>
                  </div>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddNewInterview
