/* eslint-disable react/prop-types */
function FormField({type, name, value, placeholder, error, onChange, required}) {
    const id = `field-${name}`;
    
    return(
        <div className="flex flex-col items-start bg-[#D9D9D9] sm:w-full">
            <label htmlFor={id} className="sr-only">{placeholder}</label>
            <input 
                id={id}
                type={type} 
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder} 
                required={required}
                aria-required={required}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
                className="w-full bg-[#D9D9D9] border-b-[0.1rem] placeholder-black border-black focus:outline-none focus:border-b-2 transition-all"
            />
            {error && (
                <span 
                    id={`${id}-error`}
                    className="text-xs text-red-700 mt-1"
                    role="alert"
                >
                    {error}
                </span>
            )}
        </div>
    );
}

export default FormField;