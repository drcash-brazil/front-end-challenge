import PropTypes from 'prop-types';
import LogoDrCash from '../../assets/logoDrCashPreto.png';

const Logo = ({ width }) => (
  <figure>
    <img width={width} src={LogoDrCash} alt="Logo DrCash" />
  </figure>
);

Logo.propTypes = {
  width: PropTypes.number,
};

Logo.defaultProps = {
  width: 100,
};

export default Logo;
