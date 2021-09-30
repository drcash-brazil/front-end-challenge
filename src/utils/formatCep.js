export default function formatCep(val) {
  return val.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');
}