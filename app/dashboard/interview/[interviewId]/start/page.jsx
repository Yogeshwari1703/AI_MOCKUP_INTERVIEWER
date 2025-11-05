// // "use client"
// // import React,{ useEffect ,useState} from 'react'
// // import { eq } from "drizzle-orm";
// // import { MockInterview } from "@/utils/schema";
// // import QuestionsSection from "./_component/QuestionsSection";
// // import { db } from "@/utils/db"; 

// // function StartInterview({params}) {
// //     const { interviewId } = React.use(params);

// //     const[interviewData,setInterviewData]=useState();
// //     const[mockInterviewQuestion,setMockInterviewQuestion]=useState();

// //     useEffect(()=>{
// //         GetInterviewDetails();
// //     },[])

// //     const GetInterviewDetails = async () => {
// //     const result = await db
// //       .select()
// //       .from(MockInterview)
// //       .where(eq(MockInterview.mockId, interviewId));

// //     console.log("Fetched result:", result);
// //     const jsonMockResp=JSON.parse(setInterviewData(result[0]));
// //     console.log(jsonMockResp);
// //     setMockInterviewQuestion(jsonMockResp);
// //     setaInterviewData(result[0]);
// //   };
// //   return (
// //     <div>
// //       <div className="grid grid-cols-1 md:grid-cols-2">
// //         {/* Questions */}
// //         <QuestionsSection mockInterviewQuestion={mockInterviewQuestion}/>
// //         {/* video/audio Recording */}
// //       </div>
// //     </div>
// //   )
// // }

// // export default StartInterview


// "use client"
// import React, { useEffect, useState } from "react";
// import { eq } from "drizzle-orm";
// import { MockInterview } from "@/utils/schema";
// import { db } from "@/utils/db";
// import QuestionsSection from "./_component/QuestionsSection";
// import RecordAnswerSection from "./_component/RecordAnswerSection";
// import { Button } from "@/components/ui/button";

// import Link from "next/link";
// function StartInterview({ params }) {
//   const { interviewId } = React.use(params); 

//   const [interviewData, setInterviewData] = useState();
//   const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
//   const [activeQuestionIndex,setActiveQuestion]=useState(0);

//   useEffect(() => {
//     GetInterviewDetails();
//   }, []);

//   const GetInterviewDetails = async () => {
//     const result = await db
//       .select()
//       .from(MockInterview)
//       .where(eq(MockInterview.mockId, interviewId));

//     console.log("Fetched result:", result);

//     if (result.length > 0) {
//       setInterviewData(result[0]);

//       if (result[0].jsonMockResp) {
//         try {
//           const parsed = JSON.parse(result[0].jsonMockResp);

//           // 🔑 Handle both formats: array OR object with .questions
//           const questions = Array.isArray(parsed)
//             ? parsed
//             : parsed.questions || [];

//           console.log("Parsed questions:", questions);
//           setMockInterviewQuestion(questions);
//         } catch (err) {
//           console.error("Error parsing jsonMockResp:", err);
//         }
//       }
//     }
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         <QuestionsSection mockInterviewQuestion={mockInterviewQuestion} 
//         activeQuestionIndex={activeQuestionIndex}/>
//         {/* video/audio Recording area */}
//         <RecordAnswerSection
//          mockInterviewQuestion={mockInterviewQuestion} 
//         activeQuestionIndex={activeQuestionIndex}
//         interviewData={interviewData}/>
//       </div>
//       <div className='flex justify-end gap-6'>
//         {activeQuestionIndex>0&&
//         <Button onClick={()=>setActiveQuestion(activeQuestionIndex-1)}>Previous Question</Button>}
//         {activeQuestionIndex!=mockInterviewQuestion?.length-1 &&
//         <Button onClick={()=>setActiveQuestion(activeQuestionIndex+1)}>Next Question</Button>}
//         {activeQuestionIndex==mockInterviewQuestion?.length-1&&
//         <Link href={'/dashboard/interview/'+interviewData?.mockId+"/feedback"}>
//         <Button>End Interview</Button>
//         </Link>}
//       </div>
//     </div>
//   );
// }

// export default StartInterview;





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
  const [activeQuestionIndex, setActiveQuestion] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    setLoading(true);
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
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-purple-500/30 mx-auto mb-4 animate-pulse">
            <i className="fas fa-spinner animate-spin"></i>
          </div>
          <h2 className="text-white text-xl font-semibold">Loading Interview...</h2>
          <p className="text-gray-400 mt-2">Preparing your questions</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 p-6">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="font-bold text-3xl bg-gradient-to-r from-gray-100 to-purple-300 bg-clip-text text-transparent">
              Live Interview Session
            </h1>
            <p className="text-gray-400 mt-2">
              {interviewData?.jobPosition} • {interviewData?.jobExperience} Years Experience
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <i className="fas fa-question-circle text-purple-400"></i>
            <span>Question {activeQuestionIndex + 1} of {mockInterviewQuestion.length}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-teal-400 h-2 rounded-full transition-all duration-500"
            style={{ 
              width: `${((activeQuestionIndex + 1) / mockInterviewQuestion.length) * 100}%` 
            }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400">
          <span>Session Progress</span>
          <span>{Math.round(((activeQuestionIndex + 1) / mockInterviewQuestion.length) * 100)}% Complete</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Questions Section */}
        <QuestionsSection 
          mockInterviewQuestion={mockInterviewQuestion} 
          activeQuestionIndex={activeQuestionIndex}
        />
        
        {/* Recording Section */}
        <RecordAnswerSection
          mockInterviewQuestion={mockInterviewQuestion} 
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
        />
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-400 text-white rounded-xl flex items-center justify-center text-sm shadow-lg shadow-purple-500/30">
            <i className="fas fa-navicon"></i>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">Navigation</h3>
            <p className="text-gray-400 text-xs">Move between questions</p>
          </div>
        </div>

        <div className="flex gap-4">
          {/* Previous Button */}
          {activeQuestionIndex > 0 && (
            <Button 
              onClick={() => setActiveQuestion(activeQuestionIndex - 1)}
              className="bg-gray-700 text-white border border-gray-600 hover:bg-gray-600 hover:border-purple-500 transition-all duration-300"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Previous
            </Button>
          )}
          
          {/* Next Button */}
          {activeQuestionIndex !== mockInterviewQuestion?.length - 1 && (
            <Button 
              onClick={() => setActiveQuestion(activeQuestionIndex + 1)}
              className="bg-gradient-to-r from-purple-500 to-teal-400 text-white font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Next Question
              <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          )}
          
          {/* End Interview Button */}
          {activeQuestionIndex === mockInterviewQuestion?.length - 1 && (
            <Link href={'/dashboard/interview/' + interviewData?.mockId + "/feedback"}>
              <Button className="bg-gradient-to-r from-green-500 to-teal-400 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <i className="fas fa-flag-checkered mr-2"></i>
                End Interview
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Session Info Footer */}
      <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <i className="fas fa-clock text-purple-400"></i>
          <span>Estimated time: {mockInterviewQuestion.length * 3} minutes</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="fas fa-question text-teal-400"></i>
          <span>{mockInterviewQuestion.length} questions total</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="fas fa-brain text-purple-400"></i>
          <span>AI-powered feedback</span>
        </div>
      </div>

      {/* Add Font Awesome CSS */}
      <style jsx>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
      `}</style>
    </div>
  );
}

export default StartInterview;