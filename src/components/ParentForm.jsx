import ComplexityChart from "@/components/ComplexityChart";
import { Form } from "@/components/Form";
import SelectFeatures from "@/components/SelectFeatures";
import SendButton from "@/components/SendButton";
import VulnerabilityCard from "@/components/VulnerabilityCard";
import { marked } from "marked";
import { useState } from "react";
import run from "../utils/gemini";

export default function ParentForm() {
  const [textareaValue, setTextareaValue] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [complexityData, setComplexityData] = useState(null);
  const [securityVulnerabilities, setSecurityVulnerabilities] = useState([]);

  const clearTextarea = () => {
    setTextareaValue("");
    setComplexityData(null);
    setSecurityVulnerabilities([]);
  };

  const submitCode = async () => {
    if (!selectedFeature || selectedFeature === "Select a feature") {
      alert("Please choose which task you want to perform.");
      return;
    }

    let prompt;
    if (selectedFeature === "Complexity Analysis") {
      prompt = `Here is the relevant code:\n\n${textareaValue}\n\nPlease provide the Time and Space complexity of the given code in the following JSON format:\n{\n  "time-complexity": "AI response",\n  "space-complexity": "AI response"\n}\n\nDon't give me any other text. Remember that don't give me any other text in that json`;
    } else if (selectedFeature === "Security Vulnerability Detection") {
      prompt = `Here is the relevant code:\n\n${textareaValue}\n\nPlease analyze the code for any code improvement to reduce chances of risk in my code and respond with a JSON object containing the following information:\n{\n  "name": "Name of the code improvement to reduce chances of risk",\n "risk-percentage": "Percentage of risk out of 100%"\n}\n\nProvide only the JSON object without any additional text.`;
    } else {
      prompt = `You are an AI expert in software development. Your task is to assist with the following: \n- Feature: ${selectedFeature}\n- Objective: Analyze and execute the task as it relates to the provided code, efficiency, and overall code quality.\n\nHere is the relevant code:\n\n${textareaValue}\n\nPlease generate insights, improvements, or solutions based on the task above. Be clear, professional, and provide only important explanations for any changes or recommendations you suggest.\n\nAfter explaining a point, add <br> tag for line breaking.`;
    }

    setLoading(true);

    try {
      const result = await run(prompt);
      if (!result) {
        throw new Error("Received null or undefined response.");
      }

      console.log("Raw AI response:", result.replace(/```json|```/g, '').trim());

      if (selectedFeature === "Complexity Analysis") {
        // Try to parse JSON directly if no backticks are present
        let jsonString = result.trim();
        try {
          const parsedResponse = JSON.parse(jsonString);
          setComplexityData(parsedResponse);
          setAiResponse("");
          setSecurityVulnerabilities([]);
        } catch (error) {
          console.error("Error parsing response:", error);
          setAiResponse("Error parsing response, Please Try Again!");
          setComplexityData(null);
          setSecurityVulnerabilities([]);
        }
      } else if (selectedFeature === "Security Vulnerability Detection") {
        // Clean the result by removing the ```json``` tags
        let jsonString = result.replace(/```json|```/g, '').trim();
        console.log(jsonString);
        
        try {
          const parsedResponse = JSON.parse(jsonString);
          
          // Wrap the single object in an array if it's not already an array
          const vulnerabilitiesArray = Array.isArray(parsedResponse) ? parsedResponse : [parsedResponse];
          
          setSecurityVulnerabilities(vulnerabilitiesArray);
          setAiResponse("");
          setComplexityData(null);
        } catch (error) {
          console.error("Error parsing JSON response:", error);
          setAiResponse("Error parsing JSON response.");
          setSecurityVulnerabilities([]);
        }
      }
      else {
        const lines = result.split('\n');
        
        if (lines.length > 0) {
          lines[0] = lines[0].replace(/^#+\s*/, '');
          lines[0] = `<span style="font-size: 1.5em; font-weight: bold;">${lines[0]}</span>`;
        }
      
        const formattedResponse = marked(lines.join('\n'));
        setAiResponse(formattedResponse);
        setComplexityData(null);
        setSecurityVulnerabilities([]);
      }
    } catch (error) {
      console.error("Error during API call:", error.message || error);
      setAiResponse("Error during API call: " + (error.message || error));
      setComplexityData(null);
      setSecurityVulnerabilities([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (content) => {
    setTextareaValue(content);
  };

  const handleFeatureSelect = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <div className="max-w-5xl p-4 rounded-lg shadow-md grid w-full gap-2">
      <Form
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
      />
      <SelectFeatures
        onClear={clearTextarea}
        onFileUpload={handleFileUpload}
        onFeatureSelect={handleFeatureSelect}
      />
      <SendButton onSubmit={submitCode} loading={loading} />

      {aiResponse && !complexityData && !securityVulnerabilities.length && (
        <div className="mt-4 p-4 border rounded-lg bg-gray-100 text-left max-w-4xl mx-auto overflow-auto">
          <div dangerouslySetInnerHTML={{ __html: aiResponse }} />
        </div>
      )}

      {complexityData && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg bg-gray-100">
            <h2 className="text-lg font-semibold">Time Complexity</h2>
            <p>{complexityData["time-complexity"]}</p>
          </div>
          <div className="p-4 border rounded-lg bg-gray-100">
            <h2 className="text-lg font-semibold">Space Complexity</h2>
            <p>{complexityData["space-complexity"]}</p>
          </div>
          <ComplexityChart
            complexity={complexityData["time-complexity"]}
            title="Time Complexity"
          />
          <ComplexityChart
            complexity={complexityData["space-complexity"]}
            title="Space Complexity"
          />
        </div>
      )}

      {securityVulnerabilities.length > 0 && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {securityVulnerabilities.map((vulnerability, index) => (
            <VulnerabilityCard
              key={index}
              title={vulnerability.name}
              risk={vulnerability["risk-percentage"]}
            />
          ))}
        </div>
      )}
    </div>
  );
}
