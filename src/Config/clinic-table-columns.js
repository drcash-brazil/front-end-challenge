import { moneyMask, cpfMask } from "../Utils";
const clinicColumnsConfig = [
    {
        field: 'name',
        headerName: 'Nome',
        width: 250
    },
    {
        field: 'cpf',
        headerName: 'CPF',
        width: 150,
        valueGetter: (params) => `${cpfMask(params.row.cpf)}`
    },
    {
        field: 'share_capital',
        headerName: 'Capital',
        type: 'number',
        width: 120,
        valueGetter: (params) => `${!isNaN(parseFloat(params.row.share_capital)) ? moneyMask(params.row.share_capital) : 'R$ 0,00'}`
    },
    {
        field: 'address_complete',
        headerName: 'Endereço',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 400,
        valueGetter: (params) => `${params.row.city || ''} ${params.row.state || ''}`
    }
];

export { clinicColumnsConfig };