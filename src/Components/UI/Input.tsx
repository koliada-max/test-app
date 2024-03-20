import React from 'react';

interface InputProps {
  type: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  id?: string;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  value,
  onChange,
  placeholder,
  errorMessage = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="">
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        className={`border-[1.2px] rounded-md border-solid border-gray-200 w-full h-12 px-5 py-0 items-center flex-shrink-0 text-gray-700 leading-5 focus:outline-none focus:shadow-outline placeholder-playceholder text-xs sm:text-[15px] font-normal ${
          errorMessage ? 'border-red-500' : ''
        }`}
        placeholder={placeholder}
        required
      />
      {errorMessage && (
        <p className="text-red-500 text-xs italic absolute bottom-0 left-0">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
