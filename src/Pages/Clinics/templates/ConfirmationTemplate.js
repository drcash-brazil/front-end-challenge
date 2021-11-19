import React from 'react'
import { Form } from '../../../Components/Form/useForm';
import { LabelView, StepButtons } from '../../../Components/UI';
import { moneyMask, cpfMask } from '../../../Utils';

const ConfirmationTemplate = (props) => {
    const { initialValues } = props;
    const {
        name,
        cpf,
        share_capital,
        zip_code,
        city,
        state,
        address,
        complement
    } = initialValues;

    const handleSubmit = e => {
        e.preventDefault()
        props.nextButtonOnClick();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <LabelView label="Nome da Clínica" value={name || '-'} />
            <LabelView label="CPF do Responsável" value={cpfMask(cpf) || '-'} />
            <LabelView label="Capital" value={moneyMask(share_capital) || '-'} />
            <LabelView label="Endereço" value={`${address} ${complement}, ${state} - ${city} - ${zip_code}`} />
            <StepButtons {...props} />
        </Form>
    )
}

export { ConfirmationTemplate };