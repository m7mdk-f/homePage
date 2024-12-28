import React from 'react'

interface InputRadiosProps {
    title: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputRadios({ title, checked = false, onChange }: InputRadiosProps) {
    return (
        <div className="flex gap-2 items-center mb-3">
            <input
                type="radio"
                name="branch"
                defaultChecked={checked}
                onChange={onChange}  // Handle the onChange if provided
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <label className="ml-2 text-gray-700 cursor-pointer">
                {title}
            </label>
        </div>
    )
}

export default InputRadios
