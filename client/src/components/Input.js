import React from 'react';
import { clsx } from 'clsx';

const Input = ({
    label,
    error,
    helperText,
    className = '',
    ...props
}) => {
    const inputClasses = clsx(
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
            <input
                className={inputClasses}
                {...props}
            />
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

export default Input; 