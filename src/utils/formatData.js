function formatPhone(value) {
  const match = value.match(/^(\d{2})(\d{4})(\d{4})$/);
  return `(${match[1]}) ${match[2]}-${match[3]}`;
}

function formatCNPJ(value) {
  return value.replace(/\D/g, '')
    .replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, '$1.$2.$3/$4-$5');
}

function formatCPF(value) {
  return `${value.slice(0, 3)}.${
    value.slice(3, 6)}.${
    value.slice(6, 9)}-${
    value.slice(9, 11)}`;
}

export {
  formatCPF,
  formatCNPJ,
  formatPhone,
};
