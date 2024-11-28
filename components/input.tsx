interface InputProps {
  name: string;
  type: string;
  required?: boolean;
  placeholder: string;
  errors?: string[];
}

export default function Input({
  name,
  type,
  required,
  placeholder,
  errors = [],
}: InputProps) {
  return (
    <div>
      <div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={`w-full h-12 pl-11 rounded-3xl bg-transparent text-stone-600 border placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-offset-2 transition ${
            errors.length > 0
              ? "border-red-500 focus:ring-red-400"
              : "border-stone-400 focus:ring-stone-300"
          }`}
        />
      </div>
      {errors.map((error, index) => (
        <span key={index} className="pt-2 pl-1 text-red-400">
          {error}
        </span>
      ))}
    </div>
  );
}
