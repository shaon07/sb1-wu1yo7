
type InputProps = {
  type?: "text" | "email" | "password" | "number" | "date" | "file";
  label?: string;
};

export default function Input({ type = "text", label }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label>{label}</label>}
      <input type={type} placeholder={label || ""} className="form-input" />
    </div>
  );
}
