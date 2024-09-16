import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { features } from "@/data/features";
import { Loader2, LucideMenu, LucideTrash, UploadIcon } from "lucide-react";
import { useRef, useState } from "react";

export default function SelectFeatures({ onClear, onFileUpload, onFeatureSelect }) {
  const fileInputRef = useRef(null);
  const [selectedFeature, setSelectedFeature] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsLoading(true); // Show loader when a file is selected
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setTimeout(() => {
          setIsLoading(false); // Hide loader after 3 seconds
          onFileUpload(content); // Process the file content
          fileInputRef.current.value = null; // Reset the file input
        }, 3000); // 3 seconds delay
      };
      reader.readAsText(file);
    }
  };

  const handleFeatureChange = (value) => {
    setSelectedFeature(value);
    onFeatureSelect(value);
  };

  return (
    <div className="flex items-center space-x-2">
      <Select className="flex-shrink-0" onValueChange={handleFeatureChange}>
        <SelectTrigger className="w-[210px]">
          <SelectValue placeholder="Select a feature" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Features</SelectLabel>
            {features.map((feature) => (
              <SelectItem key={feature.title} value={feature.title}>
                {feature.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="flex space-x-2">
        <input
          type="file"
          accept=".txt,.c,.cpp,.java,.py,.js,.html,.css"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Show loading spinner or upload button based on isLoading */}
        <Button variant="outline" onClick={() => fileInputRef.current.click()} disabled={isLoading}>
          {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : <UploadIcon className="h-4 w-4" />}
        </Button>

        <Button variant="outline" onClick={onClear}>
          <LucideTrash className="h-4 w-4" />
        </Button>
        <Button variant="outline">
          <LucideMenu className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
