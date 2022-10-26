import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "react-query";
import { X } from "phosphor-react";

// SERVICES
import { associateClinics } from "../../../../services/endpoints/networks";
import { getClinics } from "../../../../services/endpoints/clinics";

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

export function ModalAssociateClinic({
  networkId,
  networkData,
  queryKey,
  close,
}) {
  const queryClient = useQueryClient();

  const [clinicsOptions, setClinicsOptions] = useState([]);
  const [selectedClinics, setSelectedClinics] = useState(null);
  const [associatingClinic, setAssociatingClinic] = useState(false);
  const [loadingClinics, setLoadingClinics] = useState(false);

  const associateClinicMutation = useMutation(
    (formData) => {
      const prevData = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (old) => {
        return {
          ...old,
          clinicas: [...old.clinicas, { ...formData }],
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

  const handleAssociateClinics = useCallback(async () => {
    const { apiCall } = associateClinics();

    setAssociatingClinic(true);

    try {
      await apiCall({
        clinicaId: selectedClinics.value,
        redeId: networkId,
      });

      associateClinicMutation.mutate({
        id: selectedClinics.value,
        nome: selectedClinics.label,
      });

      setAssociatingClinic(false);
      close();
    } catch (error) {
      setAssociatingClinic(false);
    }
  }, [networkId, selectedClinics, associateClinicMutation, close]);

  const handleGetClinics = useCallback(async () => {
    const { apiCall } = getClinics();
    setLoadingClinics(true);
    const idsClinics = networkData.clinicas.map((item) => Number(item.id));
    try {
      const { clinicas } = await apiCall();

      const options = clinicas.map((item) => {
        return {
          value: item.id,
          label: item.nome,
        };
      });

      const optionsFiltered = options.filter(
        (item) => !idsClinics.includes(Number(item.value))
      );

      setClinicsOptions(optionsFiltered);
      setLoadingClinics(false);
    } catch (error) {
      setLoadingClinics(false);
    }
  }, [networkData]);

  useEffect(() => {
    handleGetClinics();
  }, [handleGetClinics, networkData]);

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
          disabled={associatingClinic || loadingClinics}
          options={clinicsOptions}
          onChange={(e) => setSelectedClinics(e)}
        />

        <Button
          type="button"
          disabled={associatingClinic}
          onClick={handleAssociateClinics}
        >
          {associatingClinic ? "Associando clínica..." : "Associar Clínicas"}
        </Button>
      </StyledForm>
    </Wrapper>
  );
}

ModalAssociateClinic.propTypes = {
  networkData: PropTypes.shape({
    clinicas: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        nome: PropTypes.string,
      })
    ),
  }).isRequired,
  networkId: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  close: PropTypes.func.isRequired,
  queryKey: PropTypes.any.isRequired,
};
