"use client";

import styled from "styled-components";

import { LoginForm } from "@/features/auth/components/login-form/login-form.component";

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

export default function Login() {
  return (
    <FlexContainer>
      <Card>
        <LoginForm />
      </Card>
    </FlexContainer>
  );
}
