// @flow
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background-color: ${props => props.theme.bg.default};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ThreadMargin = styled.View`
  padding: 16px;
  flex: 1;
`;
