interface InputProps {
  name: string;
  type: string;
  required?: boolean;
  placeholder: string;
  error?: string;
}

export default function Input({
  name,
  type,
  required,
  placeholder,
  error,
}: InputProps) {
  return (
    <div>
      <div
        className={`border border-gray-600 rounded-full w-full 
          ${error && "border-red-600 has-[:focus]:ring-red-600"}
      `}
      >
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full bg-white py-2.5 pl-12 pr-5 outline-0"
        />
      </div>
      {error && <p className="text-red-600 my-1 text-sm">{error}</p>}
    </div>
  );
}
