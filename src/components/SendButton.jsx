import { Button } from "@/components/ui/button";

export default function SendButton({ onSubmit }) {
  return (
    <Button className="ml-4 my-2" onClick={onSubmit}>
      Send code
    </Button>
  );
}
