"use client";
import React, { useState } from "react";
import handleChatApiCall from "@/helpers/handleChatApiCall";
import handleGenerateElementApiCall from "@/helpers/handleGenerateElementApiCall";
import handleGeneratePage from "@/helpers/handleGeneratePage";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [selectedOption, setSelectedOption] = useState("Chat");
  const [apiResponse, setApiResponse] = useState("");
  const [showHtml, setShowHtml] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [showRandomPageCode, setShowRandomPageCode] = useState(false);

  const handleButtonClick = async () => {
    try {
      if (selectedOption !== "GeneratePage" && inputText.trim() === "") {
        return;
      }

      let response = "";

      if (selectedOption === "Chat") {
        response = await handleChatApiCall(inputText);
      } else if (selectedOption === "GenerateElement") {
        response = await handleGenerateElementApiCall(inputText);
      } else if (selectedOption === "GeneratePage") {
        response = await handleGeneratePage();
      }

      setApiResponse(response);
      setShowHtml(selectedOption === "GenerateElement");
      setShowCode(false);
      setShowRandomPageCode(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleCode = () => {
    setShowCode(!showCode);
  };

  const toggleRandomPageCode = () => {
    setShowRandomPageCode(!showRandomPageCode);
  };

  const handleOptionChange = (e) => {
    setInputText("");
    setSelectedOption(e.target.value);
    setApiResponse("");
    setShowHtml(false);
    setShowCode(false);
    setShowRandomPageCode(false);
  };

  const handleViewGeneratedPage = () => {
    if (selectedOption === "GeneratePage" && apiResponse.trim() !== "") {
      const newWindow = window.open();
      newWindow.document.write(apiResponse);
    }
  };

  return (
    <div className="h-[100%] flex items-center justify-center bg-[#203a61]">
      <div className="w-[50%] h-[100%] text-white text-center py-4 bg-whitesmoke">
        <h1 className="text-[#da291c] text-6xl font-bold mb-4">
          Seneca Polytechnic
        </h1>
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-4xl font-semibold mb-8">Microsoft Learn Event</h2>
        </div>
        <h2 className="text-4xl font-semibold">
          Generative AI with Azure OpenAI
        </h2>
        <p className="text-2xl mt-4">Made By Majd Al Mnayer</p>
      </div>

      <div className="w-[50%] min-h-screen bg-gray-100 p-8 rounded-lg border-2 border-black-600 shadow-lg">
        <div className="mb-4">
          <label htmlFor="selectOption" className="block text-lg mb-2">
            Select Option:
          </label>
          <select
            id="selectOption"
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="Chat">Chat</option>
            <option value="GenerateElement">Generate Element</option>
            <option value="GeneratePage">Generate Random Page</option>
          </select>
        </div>
        {selectedOption !== "GeneratePage" && (
          <div className="mb-4">
            <label htmlFor="inputText" className="block text-lg mb-2">
              Enter Text:
            </label>
            <input
              type="text"
              id="inputText"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
        )}
        <button
          className="bg-[#203a61] text-white py-2 px-4 rounded-lg hover:bg-[#5c2d91]"
          onClick={handleButtonClick}
        >
          Submit
        </button>
        {selectedOption === "GenerateElement" && (
          <button
            className="bg-[#203a61] text-white py-2 px-4 rounded-lg ml-2 hover:bg-[#5c2d91]"
            onClick={toggleCode}
          >
            {showCode ? "Show Rendered" : "Show Code"}
          </button>
        )}
        {selectedOption === "GeneratePage" && (
          <button
            className="bg-[#203a61] text-white py-2 px-4 rounded-lg ml-2 hover:bg-[#5c2d91]"
            onClick={toggleRandomPageCode}
          >
            {showRandomPageCode ? "Show Rendered" : "Show Code"}
          </button>
        )}

        <div className="mt-4 h-[100%]">
          {selectedOption === "GeneratePage" ? (
            showRandomPageCode ? (
              <div className="border rounded-lg p-4 overflow-scroll h-[70vh]">
                <code>{apiResponse}</code>
              </div>
            ) : (
              <iframe
                title="Generated Page"
                srcDoc={apiResponse}
                className="border rounded-lg p-4 w-[100%] h-[70vh]"
              />
            )
          ) : showHtml ? (
            <div className="border rounded-lg p-4 text-center ">
              {showCode ? (
                <code>{apiResponse}</code>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: apiResponse }} />
              )}
            </div>
          ) : (
            <div className="border rounded-lg p-4">{apiResponse}</div>
          )}
        </div>

        {selectedOption === "GeneratePage" && apiResponse.trim() !== "" && (
          <button
            className={`bg-[#203a61] text-white py-2 px-4 rounded-lg mt-4 hover:bg-[#5c2d91] ${
              selectedOption === "GeneratePage" && apiResponse.trim() !== ""
                ? ""
                : "hidden"
            }`}
            onClick={handleViewGeneratedPage}
          >
            View Generated Page
          </button>
        )}
      </div>
    </div>
  );
}
