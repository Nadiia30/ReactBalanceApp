import styled from 'styled-components';

export const Wrapper = styled.div`
background: ${({ value }) => value < 0 ? "#ff7a7a" : "#7affbf"};
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 10px;
`;

Wrapper.displayName = 'TransactionWrapper';