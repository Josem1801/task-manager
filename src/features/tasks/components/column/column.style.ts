import styled from "styled-components";

export const BoardSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoardSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 317px;
  max-width: 350px;
  height: 100%;
  min-height: 50dvh;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 1.3rem;
`;

export const BoardSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 0.2rem;
`;
