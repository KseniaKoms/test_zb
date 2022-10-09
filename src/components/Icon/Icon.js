import Icons from '../../images/icons.svg';
import PropTypes from 'prop-types';

const Icon = ({ name, color, width, height }) => (
  <svg fill={color} width={width} height={height}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Icon;