import { useState } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import Topbar from './Topbar';
import Navbar from './Navbar';

const Layout = () => {
  const [open, setOpen] = useState(false);

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  return (
    <div>
      <Topbar setOpen={setOpen} />
      <Navbar handleClose={handleCloseDrawer} open={open} />
      <Outlet />
    </div>

  );
};

export default Layout;
