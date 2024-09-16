import { Form } from "@/components/Form";
import SelectFeatures from "@/components/SelectFeatures";
import SendButton from "@/components/SendButton";
import { useState } from "react";

export default function ParentForm() {
  const [textareaValue, setTextareaValue] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");

  const clearTextarea = () => {
    setTextareaValue("");
  };

  const submitCode = () => {
    if (selectedFeature === "" || selectedFeature === "Select a feature") {
      alert("Please choose which task you want to perform.");
    } else {
      console.log(textareaValue);
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
      <Form value={textareaValue} onChange={(e) => setTextareaValue(e.target.value)} />
      <SelectFeatures onClear={clearTextarea} onFileUpload={handleFileUpload} onFeatureSelect={handleFeatureSelect} />
      <SendButton onSubmit={submitCode} />
    </div>
  );
}
