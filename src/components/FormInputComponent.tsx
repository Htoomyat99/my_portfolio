import type { FormInputType } from "@/type";

interface FormInputComponentProps {
  input: FormInputType;
  value: string;
  onChange: (id: string, value: string) => void;
}

export default function FormINputComponent({
  input,
  value,
  onChange,
}: FormInputComponentProps) {
  return (
    <div key={input.id} className="flex flex-col items-start">
      <label htmlFor="name" className="block text-sm font-medium mb-2">
        {input.field}
      </label>

      <input
        value={value}
        onChange={(e) => onChange(input.id, e.target.value)}
        type="text"
        id={input.id}
        name={input.id}
        required
        className="w-full px-4 py-3 rounded-md border border-primary/20 bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
        placeholder={input.placeholder}
      />
    </div>
  );
}
