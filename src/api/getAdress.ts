import axios from "axios";

const BASE = `https://viacep.com.br/ws`;

export const getAdressApi = {
  getAddress: async (cep: string) => {
    let response = await axios.get(`${BASE}/${cep}/json/`);
    return response.data;
  },
};
