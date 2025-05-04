import styled from "styled-components";

interface GridContainerProps {
  columns: number;
}

export const GridContainer = styled.div<GridContainerProps>`
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-gap: 10px;
  padding: 20px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(calc(${({ columns }) => columns} - 1), 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(calc(${({ columns }) => columns} - 2), 1fr);
  }
`;
