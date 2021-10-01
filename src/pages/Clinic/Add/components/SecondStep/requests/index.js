import axios from 'axios';

export const searchCep = async cep => axios.get(`https://viacep.com.br/ws/${cep}/json/`);