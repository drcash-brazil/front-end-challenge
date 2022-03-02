import React from 'react'
import { useField } from '@formiz/core';
import { Input } from 'antd';
import 'antd/dist/antd.css';



const MyField = (props) => {
    const {
      errorMessage,
      id,
      isValid,
      isPristine,
      isSubmitted,
      resetKey,
      setValue,
      value,
    } = useField(props)
    
    const { label, type, required } = props
    const [isFocused, setIsFocused] = React.useState(false);
    const showError = !isValid && !isFocused && (!isPristine || isSubmitted)
  
    return (
      <div className={`form-group${showError ? 'is-error' : ''}`}>
        <label
          className="label"
          htmlFor={id}
        >
          { label }
          {required && ' *'}
        </label>
        <Input
        disabled={props.disable}
          key={resetKey}
          placeholder={props.placeholder}
          id={id}
          type={type || 'text'}
          value={value || ''}
          className="input"
          onChange={e => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-invalid={!isValid}
          aria-describedby={!isValid ? `${id}-error` : null}
        />
        {showError && (
          <div id={`${id}-error`} className="form">
            { errorMessage }
          </div>
        )}
      </div>
    )
  }
  export default MyField;