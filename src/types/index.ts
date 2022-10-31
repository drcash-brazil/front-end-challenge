export type ClinicsType = {
  nome: string;
  email: string;
  fone: number;
  cnpj: number;
  address: string;
  funcionarios: {
    id: number;
    nome: string;
  }[];
};

export type CollaboratorsType = {
  nome: string;
  email: string;
  fone: number;
  cpf: number;
  address: string;
};

export type NetworkType = {
  nome: string;
  email: string;
  fone: number;
  address: string;
  clinicas: {
    id: number;
    nome: string;
  }[];
};

