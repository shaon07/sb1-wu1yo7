type options = {
  value: string;
  label: string;
};

type SelectBoxProps = {
  options: options[];
  label?: string;
};

export default function SelectBox({ label, options }: SelectBoxProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label>{label}</label>}
      <select className="form-input">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
