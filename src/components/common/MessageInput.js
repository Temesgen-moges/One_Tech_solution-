import React, { useState, useEffect, useRef } from 'react';

const MessageInput = ({ value, onChange, error, placeholder, language }) => {
  const [localValue, setLocalValue] = useState(value);
  const textareaRef = useRef(null);

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
      <textarea
        value={localValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        ref={textareaRef}
        required
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default MessageInput;