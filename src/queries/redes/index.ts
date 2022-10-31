import { useQuery } from "@tanstack/react-query";
import api from "services/api";

async function getRedes() {
  const { data } = await api.get("redes");

  return data;
}

export default function useFetchRedes() {
  return useQuery(["redes"], getRedes);
}
