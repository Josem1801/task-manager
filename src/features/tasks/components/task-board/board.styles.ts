import styled from "styled-components";

export const BoardLayout = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop}px;
  display: grid;
  width: 100%;
  flex: 1;
  margin: 0 auto;
  gap: 1rem;
  padding: 0 1rem;
  overflow-x: auto;

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
