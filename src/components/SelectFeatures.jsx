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
import { Loader2, LucideTrash, UploadIcon } from "lucide-react";
import { useRef, useState } from "react";

export default function SelectFeatures({ onClear, onFileUpload, onFeatureSelect }) {
  const fileInputRef = useRef(null);
  const [selectedFeature, setSelectedFeature] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsLoading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setTimeout(() => {
          setIsLoading(false);
          onFileUpload(content);
          fileInputRef.current.value = null;
        }, 1000);
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

        <Button variant="outline" onClick={() => fileInputRef.current.click()} disabled={isLoading}>
          {isLoading ? <Loader2 className="animate-spin h-4 w-4" /> : <UploadIcon className="h-4 w-4" />}
        </Button>

        <Button variant="outline" onClick={onClear}>
          <LucideTrash className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
