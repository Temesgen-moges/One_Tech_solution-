import React, { useState, useEffect, useRef } from 'react';

const EmailInput = ({ value, onChange, error, placeholder, language }) => {
  const [localValue, setLocalValue] = useState(value);
  const inputRef = useRef(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <input
        type="email"
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        ref={inputRef}
        required
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default EmailInput;