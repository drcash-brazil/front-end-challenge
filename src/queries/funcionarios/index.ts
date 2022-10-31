import { useQuery } from "@tanstack/react-query";
import api from "services/api";

async function getFuncionarios() {
  const { data } = await api.get("funcionarios");

  return data;
}

export default function useFetchFuncionarios() {
  return useQuery(["funcionarios"], getFuncionarios);
}

