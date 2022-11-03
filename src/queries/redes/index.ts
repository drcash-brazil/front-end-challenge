import { useQuery } from "@tanstack/react-query";
import api from "services/api";
import { NetworkType } from "types";

export async function getRedes() {
  const { data } = await api.get("redes");

  return data.redes;
}

export async function getRede(NetworkId: number) {
  const { data } = await api.get(`redes/${NetworkId}`);

  return data;
}

export async function createRede(NetworkData: NetworkType) {
  const { data } = await api.post("redes", NetworkData);

  return data;
}

export async function editRede(NetworkData: NetworkType) {
  const { data } = await api.patch(`redes/${NetworkData.id}`, NetworkData);

  return data;
}

export async function deleteRede(NetworkId: number) {
  const { data } = await api.delete(`redes/${NetworkId}`);

  return data;
}

export async function associateClinica({
  clinicaId,
  redeId,
}: {
  clinicaId: number;
  redeId: number;
}) {
  const { data } = await api.patch(`associar-clinica`, {
    clinicaId,
    redeId,
  });

  return data;
}

export default function useFetchRedes() {
  return useQuery(["redes"], getRedes);
}

