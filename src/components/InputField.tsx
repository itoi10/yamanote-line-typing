type Props = {
  value: string;
  onChange: (str: string) => void;
};

const InputField: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <input
        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default InputField;
