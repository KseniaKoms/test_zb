import Icon from "../Icon";
import PropTypes from 'prop-types';

const SocialList = () => {
    return <ul>
    <li><Icon name="linkedin" width="13" height="13"/></li>
    <li><Icon name="twitter" width="16" height="13"/></li>
    <li><Icon name="facebook" width="9" height="16"/></li>
    <li><Icon name="pinterest" width="12" height="15"/></li>
</ul>
}

SocialList.propTypes = {
    children: PropTypes.node,
}

export default SocialList;