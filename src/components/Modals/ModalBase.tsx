import styled from "styled-components";

type Props = {
  name: string;
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
};

const ModalBase: React.FC<Props> = ({ name, children, onClose, isOpen }) => {
  return (
    <ModalMain isOpen={isOpen}>
      <ModalContainer>
        <Modal>
          <ModalHeader>
            {name}
            <i className="fa-solid fa-xmark" onClick={onClose}></i>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </Modal>
      </ModalContainer>
    </ModalMain>
  );
};

export default ModalBase;

const ModalMain = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000050;
`;

const Modal = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 100px;
  background-color: white;
  border-radius: 10px;
  animation-name: onShow;
  animation-duration: .8s;
  animation-timing-function: ease;

  @keyframes onShow {
    from {
      margin-top: -50px;
    }
    to {
      margin-top: 0px;
    }
  }
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #7f81838a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  position: relative;

  i {
    position: absolute;
    font-size: 16px;
    right: 15px;
    top: 15px;
    cursor: pointer;
  }
`;

const ModalBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

