import React from 'react'
import Controls from "../../../Components/Form";
import { Grid, InputAdornment } from '@mui/material';
import { useForm, Form } from '../../../Components/Form/useForm';
import { StepButtons } from '../../../Components/UI';
import { isValidCPF } from '../../../Utils/cpf';

const initialValues = {
    name: '',
    cpf: '',
    share_capital: ''
}

const ClinicFormTemplate = (props) => {

    const validate = (fieldValues = values) => {

        const validateCpf = () => {
            let msg = '';
            let cpf = fieldValues.cpf.replace(/[\s.-]*/igm, '');

            if (!cpf) msg = 'Esse campo é obrigatório.';
            else if (
                cpf.length !== 11 ||
                !isValidCPF(cpf)
            )
                msg = 'CPF inválido.';
            return msg;
        }

        let temp = { ...errors }

        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "" : "Esse campo é obrigatório."
        if ('cpf' in fieldValues)
            temp.cpf = validateCpf();

        setErrors({
            ...temp
        });

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        errors,
        setErrors,
        handleInputChange
    } = useForm(props.initialValues || initialValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            //employeeService.insertEmployee(values)
            //resetForm()
            const { name, cpf, share_capital } = values;
            props.nextButtonOnClick({ name, cpf, share_capital });
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item sx={{width: '100%'}}>
                    <Controls.Input
                        label="Nome da Clínica"
                        name="name"
                        value={values.name}
                        onChange={handleInputChange}
                        error={errors.name}
                    />
                    <Controls.Input
                        label="CPF do Responsável"
                        name="cpf"
                        value={values.cpf}
                        onChange={handleInputChange}
                        error={errors.cpf}
                    />
                    <Controls.Input
                        label="Capital Social da Clínica"
                        name="share_capital"
                        type="number"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>
                        }}
                        value={values.share_capital}
                        onChange={handleInputChange}
                        error={errors.share_capital}
                    />
                </Grid>
                <StepButtons {...props} />
            </Grid>
        </Form>
    )
}

export { ClinicFormTemplate };