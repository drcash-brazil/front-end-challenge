import { GenericType } from "types";
import create from "zustand";

export type StoreType = {
  clinicas: GenericType[];
  redes: GenericType[];
  funcionarios: GenericType[];
  updateClinicas: (clinicas: GenericType[]) => void;
  updateRedes: (redes: GenericType[]) => void;
  updateFuncionarios: (funcionarios: GenericType[]) => void;
  addClinica: (clinica: GenericType) => void;
  addRede: (redes: GenericType) => void;
  addFuncionario: (funcionario: GenericType) => void;
  removeClinica: (clinica: GenericType) => void;
  removeRede: (redes: GenericType) => void;
  removeFuncionario: (funcionario: GenericType) => void;
};

const useStore = create<StoreType>((set) => ({
  clinicas: [],
  redes: [],
  funcionarios: [],
  updateClinicas: (clinicasUpdated: GenericType[]) => {
    set((state) => ({
      clinicas: clinicasUpdated,
    }));
  },
  updateRedes: (redesUpdated: GenericType[]) => {
    set((state) => ({
      redes: redesUpdated,
    }));
  },
  updateFuncionarios: (funcionariosUpdated: GenericType[]) => {
    set((state) => ({
      funcionarios: funcionariosUpdated,
    }));
  },
  addClinica: (clinica: GenericType) => {
    set((state) => ({
      clinicas: [...state.clinicas, clinica],
    }));
  },
  addRede: (rede: GenericType) => {
    set((state) => ({
      redes: [...state.redes, rede],
    }));
  },
  addFuncionario: (funcionario: GenericType) => {
    set((state) => ({
      funcionarios: [...state.funcionarios, funcionario],
    }));
  },
  removeClinica: (clinica: GenericType) => {
    set((state) => ({
      clinicas: state.clinicas.filter((clinicas) => clinicas.id !== clinica.id),
    }));
  },
  removeRede: (rede: GenericType) => {
    set((state) => ({
      redes: state.redes.filter((redes) => redes.id !== rede.id),
    }));
  },
  removeFuncionario: (funcionario: GenericType) => {
    set((state) => ({
      funcionarios: state.funcionarios.filter(
        (funcionarios) => funcionarios.id !== funcionario.id
      ),
    }));
  },
}));

export default useStore;

