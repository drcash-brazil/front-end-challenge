import React, { useState } from "react";
import ReactDOM from "react-dom";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";

const CpfInput = () => {

  const [cpfCnpj, setCpfCnpj] = useState("");
  const [mask, setMask] = useState("");

  return (
    <div>
      <CpfCnpj
        value={cpfCnpj}
        onChange={(event, type) => {
        setCpfCnpj(ev.target.value);
        setMask(type === "CPF");
        }}
      />
    </div>
  );
};

export default CpfInput;