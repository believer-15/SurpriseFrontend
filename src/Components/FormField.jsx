/* eslint-disable react/prop-types */
function FormField({type, name, value, placeholder, error, onChange}) {

    return(
        <div className="flex flex-col items-start bg-[#D9D9D9] sm:w-full">
            <input 
                type={type} 
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder} 
                className="w-full bg-[#D9D9D9] border-b-[0.1rem] placeholder-black border-black focus:outline-none"
                aria-label={placeholder} 
            />
            {error && <span className="text-xs text-red-700">{error}</span>}
        </div>
    )

}

export default FormField;