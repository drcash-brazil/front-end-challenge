import axios from "axios";

const BASE = "http://localhost:3333/clinics";

export const clinicsApi = {
  getAllClinics: async () => {
    let response = await axios.get(`${BASE}`);
    return response.data;
  },

  postAllClinicData: async (data: any) => {
    let response = await axios.post(`${BASE}`, {
      name: data.name,
      cpf: data.cpf,
      capital: data.capital,
      logradouro: data.logradouro,
      bairro: data.bairro,
      cep: data.cep,
      localidade: data.localidade,
      uf: data.uf,
      numero: data.numero,
    });
    return response.data;
  },
};
