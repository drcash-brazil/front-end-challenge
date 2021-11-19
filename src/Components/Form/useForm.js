import React, { useState } from 'react'

const useForm = (initialFValues, validateOnChange = false, validate) => {

    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        if (validateOnChange)
            validate({ [name]: value });
    }

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({});
    }


    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
}

const Form = props => {

    const { children, ...other } = props;

    return (
        <form autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}

export { useForm, Form };