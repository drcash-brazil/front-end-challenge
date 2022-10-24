// Libs
import PropTypes from 'prop-types';
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

// Styles
import { ModalRadixOverlay, ModalRadixWrapper } from './styles';

export const ModalRadix = ({ children, overlay, ...props }) => {
  return (
    <Dialog.Root {...props}>
      {overlay && <ModalRadixOverlay />}
      {children}
    </Dialog.Root>
  );
};

ModalRadix.defaultProps = {
  overlay: true,
};

ModalRadix.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
  overlay: PropTypes.bool,
};

export const ModalWrapper = ({ children, ...props }) => {
  return <ModalRadixWrapper {...props}>{children}</ModalRadixWrapper>;
};

ModalWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
};

export const ModalTrigger = Dialog.Trigger;
ModalTrigger.displayName = 'ModalTrigger';

export const ModalCloseTrigger = Dialog.Close;
ModalCloseTrigger.displayName = 'ModalCloseTrigger';
