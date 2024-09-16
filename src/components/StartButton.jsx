import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function StartButton() {
  return (
    <Link to="/chat" className="ml-4 my-2">
      <Button>
        Getting Started <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  );
}
