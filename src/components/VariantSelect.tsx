import React, { useState } from "react";

interface VariantSelectProps {
  options: string[];
  values: string[][];
  onSelect: (selectedValues: string[]) => void;
}

const VariantSelect: React.FC<VariantSelectProps> = ({
  options,
  values,
  onSelect,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(
    Array(options.length).fill("")
  );

  const handleChange = (index: number, value: string) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = value;
    setSelectedValues(newSelectedValues);
    onSelect(newSelectedValues);
  };

  return (
    <div className="flex flex-col gap-4">
      {options.map((option, index) => (
        <div key={index} className="flex flex-col">
          <label className="font-semibold text-black">{option}</label>
          <select
            className="border bg-white text-black rounded p-2"
            value={selectedValues[index]}
            onChange={(e) => handleChange(index, e.target.value)}
          >
            <option value="">Selecione {option}</option>
            {values[index].map((value, valueIndex) => (
              <option key={valueIndex} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default VariantSelect;
