type TextareaProps = {
  rows: number;
  label?: string;
};

function Textarea({ rows, label }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-dark dark:text-white">{label}</label>}
      <textarea
        placeholder={label || ""}
        rows={rows}
        className={`form-input`}
      />
    </div>
  );
}

export default Textarea;
