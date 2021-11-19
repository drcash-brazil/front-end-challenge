import {
    ClinicFormTemplate,
    AddressFormTemplate,
    ConfirmationTemplate
} from "../Pages/Clinics/templates";

const clinicFormStepsConfig = [
    {
        label: 'Clínica',
        description: 'Cadastro de uma clínica.',
        component: ClinicFormTemplate
    },
    {
        label: 'Endereço',
        description: 'Adicione o endereço da clínica.',
        component: AddressFormTemplate
    },
    {
        label: 'Confirmação',
        description: 'Por favor, confirme os dados inseridos e clique em Finalizar.',
        component: ConfirmationTemplate
    },
];

export { clinicFormStepsConfig };