import React from 'react';
import { clsx } from 'clsx';

const Select = ({
    label,
    error,
    helperText,
    options = [],
    placeholder = 'اختر...',
    className = '',
    ...props
}) => {
    const selectClasses = clsx(
        'input',
        error && 'input-error',
        className
    );

    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <select
                className={selectClasses}
                {...props}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && (
                <p className="mt-1 text-sm text-danger-600">
                    {error}
                </p>
            )}
            {helperText && !error && (
                <p className="mt-1 text-sm text-gray-500">
                    {helperText}
                </p>
            )}
        </div>
    );
};

export default Select; 