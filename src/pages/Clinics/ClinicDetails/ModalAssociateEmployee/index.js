import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { X } from "phosphor-react";
import { useMutation, useQueryClient } from "react-query";

// SERVICES
import { associateEmployees } from "../../../../services/endpoints/clinics";
import { getEmployees } from "../../../../services/endpoints/employees";

// COMPONENTS
import { Button } from "../../../../components/Button";
import { Selector } from "../../../../components/Selector";

// STYLES
import {
  ButtonCloseModal,
  HeaderModal,
  Label,
  StyledForm,
  TitleModal,
  Wrapper,
} from "./styles";

export function ModalAssociateEmployee({
  clinicId,
  clinicData,
  queryKey,
  close,
}) {
  const queryClient = useQueryClient();

  const [employeesOptions, setEmployeesOptions] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState(null);
  const [associatingEmployee, setAssociatingEmployee] = useState(false);
  const [loadingEmployees, setLoadingEmployees] = useState(false);

  const associateEmployeeMutation = useMutation(
    (formData) => {
      const prevData = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (old) => {
        return {
          ...old,
          funcionarios: [...old.funcionarios, { ...formData }],
        };
      });

      return { prevData };
    },
    {
      onError: (err, newTodo, context) => {
        queryClient.setQueryData(queryKey, context.prevData);
      },
    }
  );

  const handleAssociateEmployees = useCallback(async () => {
    const { apiCall } = associateEmployees();

    setAssociatingEmployee(true);

    try {
      await apiCall({
        funcionarioId: selectedEmployees.value,
        clinicaId: clinicId,
      });

      associateEmployeeMutation.mutate({
        id: selectedEmployees.value,
        nome: selectedEmployees.label,
      });

      setAssociatingEmployee(false);
      close();
    } catch (error) {
      setAssociatingEmployee(false);
    }
  }, [clinicId, selectedEmployees, associateEmployeeMutation, close]);

  const handleGetEmployees = useCallback(async () => {
    const { apiCall } = getEmployees();
    setLoadingEmployees(true);
    const idsEmployees = clinicData.funcionarios.map((item) => Number(item.id));
    try {
      const { funcionarios } = await apiCall();

      const options = funcionarios.map((item) => {
        return {
          value: item.id,
          label: item.nome,
        };
      });

      const optionsFiltered = options.filter(
        (item) => !idsEmployees.includes(Number(item.value))
      );

      setEmployeesOptions(optionsFiltered);
      setLoadingEmployees(false);
    } catch (error) {
      setLoadingEmployees(false);
    }
  }, [clinicData]);

  useEffect(() => {
    handleGetEmployees();
  }, [handleGetEmployees, clinicData]);

  return (
    <Wrapper>
      <HeaderModal>
        <TitleModal>Associar Clínicas</TitleModal>
        <ButtonCloseModal type="button" onClick={close}>
          <X />
        </ButtonCloseModal>
      </HeaderModal>

      <StyledForm>
        <Label>Clínicas</Label>
        <Selector
          name="clinics"
          disabled={associatingEmployee || loadingEmployees}
          options={employeesOptions}
          onChange={(e) => setSelectedEmployees(e)}
        />

        <Button
          type="button"
          disabled={associatingEmployee}
          onClick={handleAssociateEmployees}
        >
          {associatingEmployee
            ? "Associando funcionário..."
            : "Associar Funcionário"}
        </Button>
      </StyledForm>
    </Wrapper>
  );
}

ModalAssociateEmployee.propTypes = {
  clinicData: PropTypes.shape({
    funcionarios: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        nome: PropTypes.string,
      })
    ),
  }).isRequired,
  clinicId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  close: PropTypes.func.isRequired,
  queryKey: PropTypes.any.isRequired,
};
