import PropTypes from 'prop-types';
import { Container } from './PageContainer.styled';

const PageContainer = ({children}) => {
    return <Container>{children}</Container>
}
PageContainer.propTypes = {
    children: PropTypes.node,
}
export default PageContainer;