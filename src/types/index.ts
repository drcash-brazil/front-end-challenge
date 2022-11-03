export type ClinicType = {
  id?: number;
  nome: string;
  email: string;
  fone: number;
  cnpj: number;
  address: string;
  funcionarios?: {
    id: number;
    nome: string;
  }[];
};

export type CollaboratorType = {
  id?: number;
  nome: string;
  email: string;
  fone: number;
  cpf: number;
  address: string;
};

export type NetworkType = {
  id?: number;
  nome: string;
  email: string;
  fone: number;
  address: string;
  clinicas?: {
    id: number;
    nome: string;
  }[];
};

export interface GenericType {
  id: number;
  nome: string;
  email?: string;
  fone: number;
  cnpj?: number;
  cpf?: number;
  address: string;
}