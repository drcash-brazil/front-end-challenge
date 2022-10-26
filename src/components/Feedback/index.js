import PropTypes from "prop-types";
import React from "react";

// STYLES
import { ContentFeedback, TextFeedback, Title } from "./styles";

export function Feedback({ description }) {
  return (
    <ContentFeedback>
      <Title>Oops!</Title>
      <TextFeedback>{description}</TextFeedback>
    </ContentFeedback>
  );
}

Feedback.propTypes = {
  description: PropTypes.string.isRequired,
};
