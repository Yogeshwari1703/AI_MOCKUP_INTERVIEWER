

// import React, { useState } from "react";
// import { Lightbulb, Volume2, VolumeX } from "lucide-react";

// function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
//   const [isSpeaking, setIsSpeaking] = useState(false);

//   const textToSpeech = (text) => {
//     if ("speechSynthesis" in window) {
//       if (window.speechSynthesis.speaking) {
//         window.speechSynthesis.cancel();
//         setIsSpeaking(false); // 🔴 update state when cancelled
//         return;
//       }

//       const speech = new SpeechSynthesisUtterance(text);
//       const voices = window.speechSynthesis.getVoices();

//       const softVoice = voices.find(
//         (voice) =>
//           voice.name.includes("Female") ||
//           voice.name.includes("Samantha") ||
//           voice.name.includes("Google UK English Female") ||
//           voice.name.includes("Zira")
//       );

//       if (softVoice) {
//         speech.voice = softVoice;
//       }

//       speech.pitch = 1.1;
//       speech.rate = 0.9;

//       speech.onend = () => setIsSpeaking(false); // 🔴 reset after speaking ends
//       setIsSpeaking(true); // 🔴 set while speaking
//       window.speechSynthesis.speak(speech);
//     }
//   };



//   return (
//     <div className="p-5 border rounded-lg my-10">
//       {mockInterviewQuestion && mockInterviewQuestion.length > 0 ? (
//         mockInterviewQuestion.map((question, index) => (
//           <div
//             key={index}
//             className="mb-3 inline-block grid-grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pl-5"
//           >
//             <h2
//               className={`font-semibold p-2 rounded-full text-xs md:text-sm text-center cursor-pointer
//                 ${
//                   activeQuestionIndex === index
//                     ? "bg-primary text-white"
//                     : "bg-secondary"
//                 }`}
//             >
//               Question #{index + 1}
//             </h2>
//           </div>
//         ))
//       ) : (
//         <p>Loading Questions.....</p>
//       )}

//       <h2 className="my-5 text-sm md:text-lg">
//         {mockInterviewQuestion[activeQuestionIndex]?.question}
//       </h2>

//       {/* Toggle between speaker and crossed speaker */}
//       {isSpeaking ? (
//         <VolumeX
//           className="cursor-pointer text-red-500"
//           onClick={() =>
//             textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)
//           }
//         />
//       ) : (
//         <Volume2
//           className="cursor-pointer"
//           onClick={() =>
//             textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)
//           }
//         />
//       )}

//       <div className="border rounded-lg p-5 bg-blue-100 my-10">
//         <h2 className="flex gap-2 item-center text-primary">
//           <Lightbulb />
//           <strong>Note:</strong>
//         </h2>
//         <h2 className="text-md text-primary my-2">
//           {process.env.NEXT_PUBLIC_QUESTION_NOTE}
//         </h2>
//       </div>
//     </div>
//   );
// }

// export default QuestionsSection;

import React, { useState } from "react";
import { Lightbulb, Volume2, VolumeX } from "lucide-react";

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }

      const speech = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices();

      const softVoice = voices.find(
        (voice) =>
          voice.name.includes("Female") ||
          voice.name.includes("Samantha") ||
          voice.name.includes("Google UK English Female") ||
          voice.name.includes("Zira")
      );

      if (softVoice) {
        speech.voice = softVoice;
      }

      speech.pitch = 1.1;
      speech.rate = 0.9;

      speech.onend = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/10">
      {/* Questions Navigation */}
      {mockInterviewQuestion && mockInterviewQuestion.length > 0 ? (
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-teal-400 text-white rounded-xl flex items-center justify-center text-sm shadow-lg shadow-purple-500/30">
              <i className="fas fa-question-circle"></i>
            </div>
            <h3 className="text-white font-semibold text-lg">Interview Questions</h3>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {mockInterviewQuestion.map((question, index) => (
              <div
                key={index}
                className="transition-all duration-300"
              >
                <button
                  className={`font-semibold px-4 py-2 rounded-xl text-sm transition-all duration-300 cursor-pointer border-2
                    ${
                      activeQuestionIndex === index
                        ? "bg-gradient-to-r from-purple-500 to-teal-400 text-white border-transparent shadow-lg shadow-purple-500/30"
                        : "bg-gray-700/50 text-gray-300 border-gray-600 hover:border-purple-500/50 hover:text-white"
                    }`}
                >
                  #{index + 1}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center py-8">
          <div className="flex items-center gap-3 text-purple-400">
            <i className="fas fa-spinner animate-spin"></i>
            <span>Loading Questions...</span>
          </div>
        </div>
      )}

      {/* Current Question */}
      {mockInterviewQuestion && mockInterviewQuestion.length > 0 && (
        <div className="mb-6">
          <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">
                    Question {activeQuestionIndex + 1} of {mockInterviewQuestion.length}
                  </span>
                </div>
                <h2 className="text-white text-lg leading-relaxed">
                  {mockInterviewQuestion[activeQuestionIndex]?.question}
                </h2>
              </div>
              
              {/* Voice Control */}
              <button
                onClick={() => textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)}
                className={`ml-4 p-3 rounded-xl transition-all duration-300 ${
                  isSpeaking 
                    ? "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30" 
                    : "bg-purple-500/20 text-purple-400 border border-purple-500/30 hover:bg-purple-500/30"
                }`}
              >
                {isSpeaking ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          
          {/* Progress Indicator */}
          <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
            <div 
              className="bg-gradient-to-r from-purple-500 to-teal-400 h-2 rounded-full transition-all duration-500"
              style={{ 
                width: `${((activeQuestionIndex + 1) / mockInterviewQuestion.length) * 100}%` 
              }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>Progress</span>
            <span>{activeQuestionIndex + 1}/{mockInterviewQuestion.length}</span>
          </div>
        </div>
      )}

      {/* Note Section */}
      <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 rounded-xl p-5 border border-yellow-500/30">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-400 text-white rounded-lg flex items-center justify-center text-xs shadow-lg shadow-yellow-500/30">
            <Lightbulb className="w-4 h-4" />
          </div>
          <h4 className="text-yellow-400 font-semibold text-sm">Important Note</h4>
        </div>
        <p className="text-yellow-300/80 text-sm leading-relaxed">
          {process.env.NEXT_PUBLIC_QUESTION_NOTE || "Take your time to think before answering. Focus on clear communication and structure your responses effectively."}
        </p>
      </div>

      {/* Add Font Awesome CSS */}
      <style jsx>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
      `}</style>
    </div>
  );
}

export default QuestionsSection;