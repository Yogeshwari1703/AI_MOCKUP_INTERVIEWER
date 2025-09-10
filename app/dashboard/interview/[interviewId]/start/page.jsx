// "use client"
// import React,{ useEffect ,useState} from 'react'
// import { eq } from "drizzle-orm";
// import { MockInterview } from "@/utils/schema";
// import QuestionsSection from "./_component/QuestionsSection";
// import { db } from "@/utils/db"; 

// function StartInterview({params}) {
//     const { interviewId } = React.use(params);

//     const[interviewData,setInterviewData]=useState();
//     const[mockInterviewQuestion,setMockInterviewQuestion]=useState();

//     useEffect(()=>{
//         GetInterviewDetails();
//     },[])

//     const GetInterviewDetails = async () => {
//     const result = await db
//       .select()
//       .from(MockInterview)
//       .where(eq(MockInterview.mockId, interviewId));

//     console.log("Fetched result:", result);
//     const jsonMockResp=JSON.parse(setInterviewData(result[0]));
//     console.log(jsonMockResp);
//     setMockInterviewQuestion(jsonMockResp);
//     setaInterviewData(result[0]);
//   };
//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2">
//         {/* Questions */}
//         <QuestionsSection mockInterviewQuestion={mockInterviewQuestion}/>
//         {/* video/audio Recording */}
//       </div>
//     </div>
//   )
// }

// export default StartInterview


"use client"
import React, { useEffect, useState } from "react";
import { eq } from "drizzle-orm";
import { MockInterview } from "@/utils/schema";
import { db } from "@/utils/db";
import QuestionsSection from "./_component/QuestionsSection";
import RecordAnswerSection from "./_component/RecordAnswerSection";
import { Button } from "@/components/ui/button";

import Link from "next/link";
function StartInterview({ params }) {
  const { interviewId } = React.use(params); 

  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
  const [activeQuestionIndex,setActiveQuestion]=useState(0);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, interviewId));

    console.log("Fetched result:", result);

    if (result.length > 0) {
      setInterviewData(result[0]);

      if (result[0].jsonMockResp) {
        try {
          const parsed = JSON.parse(result[0].jsonMockResp);

          // 🔑 Handle both formats: array OR object with .questions
          const questions = Array.isArray(parsed)
            ? parsed
            : parsed.questions || [];

          console.log("Parsed questions:", questions);
          setMockInterviewQuestion(questions);
        } catch (err) {
          console.error("Error parsing jsonMockResp:", err);
        }
      }
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <QuestionsSection mockInterviewQuestion={mockInterviewQuestion} 
        activeQuestionIndex={activeQuestionIndex}/>
        {/* video/audio Recording area */}
        <RecordAnswerSection
         mockInterviewQuestion={mockInterviewQuestion} 
        activeQuestionIndex={activeQuestionIndex}
        interviewData={interviewData}/>
      </div>
      <div className='flex justify-end gap-6'>
        {activeQuestionIndex>0&&
        <Button onClick={()=>setActiveQuestion(activeQuestionIndex-1)}>Previous Question</Button>}
        {activeQuestionIndex!=mockInterviewQuestion?.length-1 &&
        <Button onClick={()=>setActiveQuestion(activeQuestionIndex+1)}>Next Question</Button>}
        {activeQuestionIndex==mockInterviewQuestion?.length-1&&
        <Link href={'/dashboard/interview/'+interviewData?.mockId+"/feedback"}>
        <Button>End Interview</Button>
        </Link>}
      </div>
    </div>
  );
}

export default StartInterview;
