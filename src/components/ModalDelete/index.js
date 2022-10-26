import PropTypes from "prop-types";
import React from "react";

// STYLES
import {
  DescriptionModal,
  HeaderModal,
  StyledContentButton,
  Wrapper,
} from "./styles";
import { ButtonOutLine } from "../ButtonOutline";
import { Button } from "../Button";
import { WarningCircle } from "phosphor-react";

export function ModalDelete({ close, handleDelete }) {
  return (
    <Wrapper>
      <HeaderModal>
        <WarningCircle />
      </HeaderModal>

      <DescriptionModal>
        Tem certeza que deseja fazer isso? Você não poderá reverter essa ação
        depois!!
      </DescriptionModal>

      <StyledContentButton>
        <ButtonOutLine type="button" onClick={close}>
          Cancelar
        </ButtonOutLine>
        <Button type="button" onClick={handleDelete}>
          Deletar
        </Button>
      </StyledContentButton>
    </Wrapper>
  );
}

ModalDelete.propTypes = {
  close: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
