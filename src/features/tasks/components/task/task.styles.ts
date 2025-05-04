import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 316px;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
