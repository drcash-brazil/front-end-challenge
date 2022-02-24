import { createContext, ReactNode, useContext, useReducer } from "react";

interface initialDataType {
  currentStep: number;
  name: string;
  cpf: string;
  capital: string;
  cep: string;
  logradouro: string;
  bairro: string;
  numero: string;
  localidade: string;
  uf: string;
}

interface ActionType {
  type: FormAction;
  payload: any;
}

interface ContextType {
  state: initialDataType;
  dispatch: (action: ActionType) => void;
}

interface FormProviderProps {
  children: ReactNode;
}

const initialData: initialDataType = {
  currentStep: 0,
  name: "",
  cpf: "",
  capital: "",
  cep: "",
  logradouro: "",
  bairro: "",
  numero: "",
  localidade: "",
  uf: "",
};

//Context
const FormContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum FormAction {
  setCurrentStep,
  setName,
  setCPF,
  setCapital,
  setCep,
  setLogradouro,
  setNumero,
  setLocalidade,
  setBairro,
  setUf,
}

const formReducer = (state: initialDataType, action: ActionType) => {
  switch (action.type) {
    case FormAction.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormAction.setName:
      return { ...state, name: action.payload };
    case FormAction.setCPF:
      return { ...state, cpf: action.payload };
    case FormAction.setCapital:
      return { ...state, capital: action.payload };
    case FormAction.setCep:
      return { ...state, cep: action.payload };
    case FormAction.setLogradouro:
      return { ...state, logradouro: action.payload };
    case FormAction.setBairro:
      return { ...state, bairro: action.payload };
    case FormAction.setUf:
      return { ...state, uf: action.payload };
    case FormAction.setLocalidade:
      return { ...state, localidade: action.payload };
    case FormAction.setNumero:
      return { ...state, numero: action.payload };
    default:
      return state;
  }
};

//Provider
export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

//Context Hook
export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm precisa ser usado dentro do FormProvider");
  }
  return context;
};
