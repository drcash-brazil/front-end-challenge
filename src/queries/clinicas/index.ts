import { useQuery } from "@tanstack/react-query";
import api from "services/api";

async function getClinicas() {
  const { data } = await api.get("clinicas");

  return data;
}

export default function useFetchClinicas() {
  return useQuery(["clinicas"], getClinicas);
}

