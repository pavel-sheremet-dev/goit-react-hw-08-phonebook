import PropTypes from 'prop-types';

import { Grid } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = ({ chunk = false }) => {
  return (
    <LoaderContainer chunk={chunk}>
      <Grid color="#236d44" height={30} width={30} />
    </LoaderContainer>
  );
};

Loader.propTypes = {
  chunk: PropTypes.bool,
};

export default Loader;
