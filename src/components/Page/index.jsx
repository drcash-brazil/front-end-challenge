import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Page = ({ children, title }) => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </>
);

export default Page;

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
