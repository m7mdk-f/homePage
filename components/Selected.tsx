import React from "react";

interface SelectProps {
    label: string;
    options: { value: string; label: string }[];
    value: string | null;
    onChange: (value: string) => void;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
}

const Selected: React.FC<SelectProps> = ({
    label,
    options,
    value,
    onChange,
    disabled = false,
    placeholder = "اختر خيارًا",
    className = "",
}) => {
    return (
        <div className={`mb-4 ${className}`}>
            <label className="block mb-2 text-gray-700 font-medium">{label}</label>
            <div className={`border rounded-[7px] py-1 ${disabled ? "opacity-70 cursor-not-allowed" : ""}`}>
                <select
                    value={value || ""}
                    onChange={(e) => onChange(e.target.value)}
                    disabled={disabled}
                    className="block w-[95%] mx-auto py-2 border-none bg-transparent outline-none rounded-md"
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Selected;
