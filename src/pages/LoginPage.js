import React, { useState } from "react";
import styled from "@emotion/styled";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 120px;
  padding-top: 5em;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Title = styled.div`
  font-size: 34px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  zindex: 1000;
`;

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <LoginContainer>
       <Title>Sign-In or Register</Title>
      <LoginForm onSubmit={handleSubmit}>
       
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
