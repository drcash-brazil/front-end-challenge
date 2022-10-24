import { ContentRoot, ContentSlot, StyledInput } from "./styles";

function TextInputRoot({ children }) {
  return <ContentRoot>{children}</ContentRoot>;
}

function TextInputIcon({ children }) {
  return <ContentSlot>{children}</ContentSlot>;
}

function TextInputInput(props) {
  return <StyledInput {...props} />;
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
