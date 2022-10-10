import Icons from '../../images/icons.svg';
import PropTypes from 'prop-types';
import {Social } from './Icon.styled';

const Icon = ({ name, color, width, height }) => (
  <Social fill={color} width={width} height={height}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </Social>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Icon;