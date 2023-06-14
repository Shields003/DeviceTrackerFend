import React, { useState } from "react";
import styled from "@emotion/styled";

import Footer from "../../components/footer/footer";
import loginButton from "../../components/buttons/loginButton";
import logoutButton from "../../components/buttons/logoutButton";

const theme = {
  colors: {
    primary: "#284b63", // primary color (blue)
    complementary1: "#3c6e71", // complementary color 1 (dark blue/green)
    complementary2: "#d9d9d9", // complementary color 2 (gray)
    accent: "#1985a1", // accent color (blue/green)
    accent2: "#fca311", // accent color 2 (orange)
    dark: "#353535", // dark color (dark gray)
    text: "#ffffff", // text color (white)
    alert: "#eb5e28", // alert color (orange/red)
  },
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.complementary2};

`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  padding: 2em;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  border: 4px solid #284b63;
  border-radius: 8px;
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

const Title = styled.h1`
  margin-top: -15em;
  font-size: 2rem;
  text-align: center;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
`;

const Signup = styled.h2`
  font-size: 1.2rem;
  color: ${theme.colors.dark};
  margin-top: 2rem;
  text-align: center;
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
      <Title>Login</Title>
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
        <Signup>Not Registered?  Register Here!</Signup>
      </LoginForm>
      <Footer />
    </LoginContainer>
  );
};

export default LoginPage;
