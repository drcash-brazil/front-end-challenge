const styles = (theme) => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  menuHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '3px 16px',
    '& img': {
      height: '50px',
    },
  },
  headbarButton: {
    padding: 0,
  },
  logo: {
    height: 20,
  },
  logoMenu: {
    width: 58,
    height: 64,
  },
  boxMenu: {
    padding: 0,
  },
  listMenu: {
    padding: 0,
  },
  hideNavbar: {
    display: 'none',
  },
});

export default styles;
