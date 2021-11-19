import React from 'react'
import Controls from "../../../Components/Form";
import Grid from '@mui/material/Grid';
import { useForm, Form } from '../../../Components/Form/useForm';
import axios from 'axios';
import { StepButtons } from '../../../Components/UI';

const initialValues = {
    zip_code: '',
    city: '',
    state: '',
    address: '',
    complement: ''
}

const AddressFormTemplate = (props) => {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('zip_code' in fieldValues)
            temp.zip_code = fieldValues.zip_code && fieldValues.zip_code.length === 8 ? "" : "Deve conter 8 dígitos"
        setErrors({
            ...temp
        });
        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }
    
    const {
        values,
        errors,
        setValues,
        setErrors,
        handleInputChange
    } = useForm(props.initialValues || initialValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            //employeeService.insertEmployee(values)
            const {
                zip_code, city, state, address, complement
            } = values;
            props.nextButtonOnClick({
                zip_code, city, state, address, complement
            });
        }
    }

    const getCep = async (e) => {
        try {
            const { value } = e.target;
            handleInputChange(e);
            if (value.length === 8) {
                const { data } = await axios.get(`https://viacep.com.br/ws/${value}/json/`)
                const { localidade, bairro, logradouro } = data;
                setValues({
                    zip_code: value,
                    city: localidade,
                    state: bairro,
                    address: logradouro,
                    complement: ''
                });
            }
        } catch (error) {
            handleInputChange(e);
            console.log(error)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item sx={{width: '100%'}}>
                    <Controls.Input
                        label="CEP"
                        name="zip_code"
                        value={values.zip_code}
                        onChange={getCep}
                        error={errors.zip_code}
                    />
                    <Controls.Input
                        label="Endereço"
                        name="address"
                        value={values.address}
                        onChange={handleInputChange}
                        error={errors.address}
                    />
                    <Controls.Input
                        label="Complemento"
                        name="complement"
                        value={values.complement}
                        onChange={handleInputChange}
                        error={errors.complement}
                    />
                    <Controls.Input
                        label="Estado"
                        name="state"
                        value={values.state}
                        onChange={handleInputChange}
                        error={errors.state}
                    />
                    <Controls.Input
                        label="Cidade"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                        error={errors.city}
                    />
                </Grid>
                <StepButtons {...props} />
            </Grid>
        </Form>
    )
}

export { AddressFormTemplate };