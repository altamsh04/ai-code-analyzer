import { Textarea } from "@/components/ui/textarea";

export function Form({ value, onChange }) {
  return (
    <div>
      <Textarea
        value={value}
        onChange={onChange}
        style={{ width: '100%', height: '500px' }}
        placeholder="Paste your code here."
      />
    </div>
  );
}
