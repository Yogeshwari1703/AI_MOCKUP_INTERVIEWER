import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation';

function InterviewItemCard({interview}) {

    const router=useRouter();

    const onStart=()=>{
        router.push('/dashboard/interview/'+interview?.mockId)
    }

    const onFeedbackPress=()=>{
        router.push('/dashboard/interview/'+interview.mockId+"/feedback")
    }

  return (
    <div className='border shadow-sm rounded-lg p-3'>
      <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
      <h2 className='text-sm text-grey-500'>{interview?.jobExperience} Years of Experience</h2>
      <h2 className='text-xs text-grey-400'>Created At: {interview.createdAt}</h2>

      <div className='flex justify-between mt-2 gap-5'>
        <Button size="sm" variant="outline" className="w-38"
        onClick={onFeedbackPress}
        >Feedback</Button>
     
        <Button className="w-38" 
        onClick={onStart}
        >Start</Button>
      </div>
    </div>
  )
}

export default InterviewItemCard
