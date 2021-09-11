import React from 'react';
import '../styles/TextField.css'

const TextField=({field, value, type, onChange, placeholder, error, id, className})=>{
    return(
        <div>
            <input
            id={id}
            type={type} 
            name={field}
            value={value}
            onChange={onChange}
            className={className}
            placeholder={placeholder}
            />
  {error && <p className="error-message text-center mx-auto">{error}</p>}
        </div>
      
    )
}

export default TextField