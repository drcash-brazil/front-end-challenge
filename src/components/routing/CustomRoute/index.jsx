import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const CustomRoute = ({
  children,
  layout: Layout,
  ...props
}) => {

  if (Layout) {
    return (
      <Layout>
        <Route {...props}>
          {children}
        </Route>
      </Layout>
    );
  }

  return (
    <Route {...props}>
      {children}
    </Route>
  );
};

CustomRoute.propTypes = {
  children: PropTypes.node,
  layout: PropTypes.func,
};

CustomRoute.defaultProps = {
  children: null,
  layout: null,
};

export default CustomRoute;
