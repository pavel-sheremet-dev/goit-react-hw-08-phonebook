import PropTypes from 'prop-types';
import { StyledBlock, SubTitle } from './Block.styled';

const Block = ({ subTitle, children, tagName = 'div', isHidden = false }) => {
  return (
    <StyledBlock>
      {subTitle && (
        <SubTitle as={tagName} isHidden={isHidden}>
          {subTitle}
        </SubTitle>
      )}

      {children}
    </StyledBlock>
  );
};

export default Block;

Block.propTypes = {
  subTitle: PropTypes.string.isRequired,
  children: PropTypes.node,
  tagName: PropTypes.string,
  isHidden: PropTypes.bool,
};
