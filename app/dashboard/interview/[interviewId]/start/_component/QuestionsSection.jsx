

import React, { useState } from "react";
import { Lightbulb, Volume2, VolumeX } from "lucide-react";

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false); // 🔴 update state when cancelled
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

      speech.onend = () => setIsSpeaking(false); // 🔴 reset after speaking ends
      setIsSpeaking(true); // 🔴 set while speaking
      window.speechSynthesis.speak(speech);
    }
  };



  return (
    <div className="p-5 border rounded-lg my-10">
      {mockInterviewQuestion && mockInterviewQuestion.length > 0 ? (
        mockInterviewQuestion.map((question, index) => (
          <div
            key={index}
            className="mb-3 inline-block grid-grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pl-5"
          >
            <h2
              className={`font-semibold p-2 rounded-full text-xs md:text-sm text-center cursor-pointer
                ${
                  activeQuestionIndex === index
                    ? "bg-primary text-white"
                    : "bg-secondary"
                }`}
            >
              Question #{index + 1}
            </h2>
          </div>
        ))
      ) : (
        <p>Loading Questions.....</p>
      )}

      <h2 className="my-5 text-sm md:text-lg">
        {mockInterviewQuestion[activeQuestionIndex]?.question}
      </h2>

      {/* Toggle between speaker and crossed speaker */}
      {isSpeaking ? (
        <VolumeX
          className="cursor-pointer text-red-500"
          onClick={() =>
            textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)
          }
        />
      ) : (
        <Volume2
          className="cursor-pointer"
          onClick={() =>
            textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)
          }
        />
      )}

      <div className="border rounded-lg p-5 bg-blue-100 my-10">
        <h2 className="flex gap-2 item-center text-primary">
          <Lightbulb />
          <strong>Note:</strong>
        </h2>
        <h2 className="text-md text-primary my-2">
          {process.env.NEXT_PUBLIC_QUESTION_NOTE}
        </h2>
      </div>
    </div>
  );
}

export default QuestionsSection;
