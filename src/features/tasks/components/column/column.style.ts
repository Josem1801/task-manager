import styled from "styled-components";

export const BoardSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: fit-content;
  flex: 1;
  min-height: 50dvh;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 1.3rem 0;
`;

export const BoardSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.3rem;
`;

export const BoardSectionContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex: 1;
  max-height: 50dvh;
  overflow-y: auto;
  padding: 0.5rem 1.3rem;
`;
