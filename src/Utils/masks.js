export const moneyMask = value =>
    parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export const cpfMask = value =>
    value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
