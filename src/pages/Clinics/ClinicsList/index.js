import React, { useCallback, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { At, Phone } from "phosphor-react";

// SERVICES
import { getClinics } from "../../../services/endpoints/clinics";

// COMPONENTS
import { Button } from "../../../components/Button";
import { Loading } from "../../../components/Loading";
import { ModalRadix, ModalWrapper } from "../../../components/ModalRadix";
import { Feedback } from "../../../components/Feedback";
import { ModalCreateClinics } from "./ModalCreateClinic";

// STYLES
import {
  BoxInfo,
  BoxInitialLetter,
  ClinicList,
  HeaderContentRight,
  HeaderItem,
  HeaderPage,
  Info,
  Item,
  MoreInfo,
  NetworkName,
  TitlePage,
  WrapperClinics,
} from "./styles";

export function ClinicsList() {
  const queryKey = useMemo(() => ["clinics"], []);
  const [isOpenModalCreateClinic, setIsOpenModalCreateClinic] = useState(false);

  const handleGetClinics = useCallback(async () => {
    const { apiCall } = getClinics();

    const { clinicas } = await apiCall();

    return clinicas;
  }, []);

  const { data, isLoading, error } = useQuery(queryKey, handleGetClinics, {
    refetchOnWindowFocus: false,
    retry: 0,
  });

  return (
    <WrapperClinics>
      <HeaderPage>
        <TitlePage>Clínicas</TitlePage>

        <HeaderContentRight>
          <Button
            type="button"
            onClick={() => setIsOpenModalCreateClinic(true)}
          >
            Cadastrar Clínica
          </Button>
        </HeaderContentRight>
      </HeaderPage>

      {isLoading && <Loading />}

      {!isLoading && !error && !!data.length && (
        <ClinicList>
          {data.map((item) => (
            <Item key={item.id} to={`/clinic/${item.id}`}>
              <HeaderItem>
                <BoxInitialLetter>{item.nome.substr(0, 1)}</BoxInitialLetter>
                <NetworkName>{item.nome}</NetworkName>
              </HeaderItem>

              <MoreInfo>
                <BoxInfo>
                  <At />
                  <Info>{item.email}</Info>
                </BoxInfo>

                <BoxInfo>
                  <Phone />
                  <Info>{item.fone}</Info>
                </BoxInfo>
              </MoreInfo>
            </Item>
          ))}
        </ClinicList>
      )}

      {!isLoading && !error && !data.length && (
        <Feedback description="Nenhuma clínica encontrada" />
      )}

      <ModalRadix open={isOpenModalCreateClinic}>
        <ModalWrapper>
          <ModalCreateClinics close={() => setIsOpenModalCreateClinic(false)} />
        </ModalWrapper>
      </ModalRadix>
    </WrapperClinics>
  );
}
