import { useQuery } from "@tanstack/react-query";
import api from "services/api";
import { CollaboratorType } from "types";

export async function getFuncionarios() {
  const { data } = await api.get("funcionarios");

  return data.funcionarios;
}

export async function getFuncionario(FuncionarioId: number) {
  const { data } = await api.get(`funcionarios/${FuncionarioId}`);

  return data;
}

export async function createFuncionario(Funcionario: CollaboratorType) {
  const { data } = await api.post("funcionarios", Funcionario);

  return data;
}

export async function deleteFuncionario(FuncionarioId: number) {
  const { data } = await api.delete(`funcionarios/${FuncionarioId}`);

  return data;
}

export default function useFetchCollaborator() {
  return useQuery(["funcionarios"], getFuncionarios);
}

