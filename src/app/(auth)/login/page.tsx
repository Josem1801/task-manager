import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";

import styled from "styled-components";

import { increment } from "@/lib/store/app.reducer";
import { RootState } from "@/lib/store/app.store";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

const Card = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: black;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition:
    color 0.15s ease,
    border-color 0.15s ease;
`;

const StyledLink = styled(Link)`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

export default function Login() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <FlexContainer>
      <Card>
        <button onClick={() => dispatch(increment())}>Incremente</button>
        {count}
      </Card>
    </FlexContainer>
  );
}
