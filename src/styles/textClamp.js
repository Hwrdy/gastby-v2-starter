import { css } from 'styled-components';

const TextClamp = css`
  display: block;
  position: relative;
  height: ${props => props.textClampLineHeight * props.textClampLines}px;
  overflow: hidden;

  &::after {
    content: '...';
    text-align: right;
    bottom: 0;
    right: 0;
    width: 20%;
    display: block;
    position: absolute;
    height: ${props => props.textClampLineHeight}px;
  }

  @supports (-webkit-line-clamp: 1) {
    display: -webkit-box;
    -webkit-line-clamp: ${props => props.textClampLines};
    -webkit-box-orient: vertical;

    &::after {
      display: none;
    }
  }
`;

export default TextClamp;
