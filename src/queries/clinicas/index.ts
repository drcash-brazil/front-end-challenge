import { useQuery } from "@tanstack/react-query";
import api from "services/api";
import { ClinicType } from "types";

export async function getClinicas() {
  const { data } = await api.get("clinicas");

  return data.clinicas;
}

export async function getClinica(clinicId: number) {
  const { data } = await api.get(`clinicas/${clinicId}`);

  return data.clinicas;
}

export async function createClinica(clinicData: ClinicType) {
  const { data } = await api.post("clinicas", clinicData);

  return data;
}

export async function editClinica(clinicData: ClinicType) {
  const { data } = await api.patch(`clinicas/${clinicData.id}`, clinicData);

  return data;
}

export async function deleteClinica(clinicId: number) {
  const { data } = await api.delete(`clinicas/${clinicId}`);

  return data;
}

export async function associateCollaborator({
  clinicaId,
  funcionarioId,
}: {
  clinicaId: number;
  funcionarioId: number;
}) {
  const { data } = await api.patch(`associar-funcionario`, {
    clinicaId,
    funcionarioId,
  });

  return data;
}

export default function useFetchClinicas() {
  return useQuery(["clinica"], getClinicas);
}

