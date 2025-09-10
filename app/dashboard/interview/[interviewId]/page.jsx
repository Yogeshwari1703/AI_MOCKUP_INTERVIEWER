
"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { eq } from "drizzle-orm";
import { MockInterview } from "@/utils/schema";
import Webcam from "react-webcam";
import { Webcam as WebcamIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Lightbulb } from 'lucide-react';
import Link from "next/link";

function Interview({ params }) {
  // ✅ unwrap params using React.use()
  const { interviewId } = React.use(params);

  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  useEffect(() => {
    if (interviewId) {
      GetInterviewDetails();
    }
  }, [interviewId]);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, interviewId));

    console.log("Fetched result:", result);
    setInterviewData(result[0]);
  };

  if (!interviewData) {
    return <div>Loading interview details...</div>;
  }

  return (
    <div className="my-10 ">
      <h2 className="font-bold text-2xl">Let's Get Started</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
   

      <div className="flex flex-col my-5 gap-5">
      <div className="flex flex-col p-5 rounded-lg border">
        <h2 className="text-lg">
          <strong>Job Role/Job Position:</strong>{" "}
          {interviewData?.jobPosition ?? "Not available"}
        </h2>
        <h2 className="text-lg">
          <strong>Job Description/Tech Stack:</strong>{" "}
          {interviewData?.jobDesc ?? "Not available"}
        </h2>
        <h2 className="text-lg">
          <strong>Years of Experience:</strong>{" "}
          {interviewData?.jobExperience ?? "Not available"}
        </h2>
      </div>
      <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
         <h2 className='flex gap-2 items-center text-yellow-500'> <Lightbulb/><strong>Information</strong></h2> 
         <h2>{process.env.NEXT_PUBLIC_INFORMATION}</h2>  
      </div>

      </div>

       <div>
        {webCamEnabled ? (
          <Webcam
            onUserMedia={() => setWebCamEnabled(true)}
            onUserMediaError={() => setWebCamEnabled(false)}
            mirrored={true}
            style={{ height: 300, width: 300 }}
          />
        ) : (
          <>
            <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border" />
            <Button variant="ghost" className="w-full" onClick={() => setWebCamEnabled(true)}>
              Enable Web Cam and Microphone
            </Button>
          </>
        )}
      </div>

      </div>
      <div className='flex justify-end items-end p-5'>
        <Link href={'/dashboard/interview/'+interviewId+'/start'} >
          <Button>Start Interview</Button>
        </Link>
        
      </div>
      
      
    </div>
  );
}

export default Interview;










// "use client"

// import React,{useEffect,useState} from 'react'
// import { db } from '@/utils/db'
// import { eq } from 'drizzle-orm'
// import { MockInterview } from '@/utils/schema'
// import Webcam from "react-webcam";
// import { Webcam as WebcamIcon } from "lucide-react";
// import { Button } from '@/components/ui/button'


// function Interview({params}) {
//   const { interviewId } = params;
//   const [interviewData,setInterviewData]=useState();

//  useEffect(() => {
//     if (params?.interviewId) {
//       GetInterviewDetails();
//     }
//   }, [params.interviewId]);


// //   used to get interview details by mockid/interview id

//   const GetInterviewDetails=async()=>{
//     const result=await db.select().from(MockInterview)
//     .where(eq(MockInterview.mockId,params.interviewId))
//     console.log(result);

//     setInterviewData(result[0]);
//   }
//   return (
//     <div className='my-10 flex justify-center flex-col items-center'>
//       <h2 className="font-bold text-2xl">Let's Get Started</h2>
//     </div>
//   )
// }

// export default Interview









// "use client"

// import React,{useEffect,useState} from 'react'
// import { db } from '@/utils/db'
// import { eq } from 'drizzle-orm'
// import { MockInterview } from '@/utils/schema'
// import Webcam from "react-webcam";
// import { Webcam as WebcamIcon } from "lucide-react";
// import { Button } from '@/components/ui/button'



// function Interview({ interviewId }) {
//   const [interviewData, setInterviewData] = useState();
//   const [webCamEnabled,setwebCamEnabled]=useState(false);

//   useEffect(() => {
//     if (interviewId) {
//       GetInterviewDetails();
//     }
//   }, [interviewId]);

//   // used to get interview details by mockid/interview id
//   const GetInterviewDetails = async () => {
//     const result = await db
//       .select()
//       .from(MockInterview)
//       .where(eq(MockInterview.mockId, interviewId));

//     console.log(result);
//     setInterviewData(result[0]);
//   };



//   return (
//     <div className='my-10 flex justify-center flex-col items-center'>
//       <h2 className="font-bold text-2xl">Let's Get Started</h2>
//       <div>

//       {webCamEnabled?<Webcam
//       onUserMedia={()=>setwebCamEnabled(true)}
//       onUserMediaError={()=>setwebCamEnabled(false)}
//       mirrored={true}
//       style={{
//         height:300,
//         width:300
//       }}
//       />
//       :
//       <>
//       <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border"/>
//       <Button onClick={()=>setwebCamEnabled(true)}>Enable Web Cam and Microphone</Button>
//       </>
// }
//     </div>
//     {interviewData ? (
//   <div>
//     <h2>
//       <strong>Job Role/Job Position:</strong> {interviewData.jobPosition}
//     </h2>
//   </div>
// ) : (
//   <p>Loading interview details...</p>
// )}

//     </div>
//   )
// }

// export default Interview


