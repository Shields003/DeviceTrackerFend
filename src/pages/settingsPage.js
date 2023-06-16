import React, { useState } from "react";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import { useAuth0 } from "@auth0/auth0-react";
// Local Imports
import FooterWithDate from "../components/footer/footerWithDate";

//Styling
const theme = {
  colors: {
    primary: "#284b63",
    complementary1: "#3c6e71",
    complementary2: "#d9d9d9",
    accent: "#1985a1",
    accent2: "#fca311",
    dark: "#353535",
    text: "#ffffff",
    alert: "#eb5e28",
  },
};

const GlobalStyle = css`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.complementary2};
`;

const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 2em;
  margin-bottom: 20rem;
  border: 4px solid #284b63;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23);
`;

const UserData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
`;

const FieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  color: ${theme.colors.primary};
`;

const LabelToggle = styled.label`
  font-size: 1.2rem;
  color: ${theme.colors.primary};
  width: 200px;
`;

const Input = styled.input`
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 350px;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: 10px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.checked ? "#2196f3" : "#ccc")};
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: ${(props) => (props.checked ? "26px" : "4px")};
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Select = styled.select`
  width: 370px;
  padding: 0.5em;
  font-size: 1em;
  border: 1px solid ${theme.colors.primary};
  border-radius: 4px;
  margin-bottom: 1em;
  background-color: ${theme.colors.complementary2};
  color: ${theme.colors.primary};
  &:focus {
    outline: none;
    border-color: ${theme.colors.accent};
  }
  option {
    color: ${theme.colors.dark};
    background: ${theme.colors.complementary2};
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

// Main function
const SettingsPage = () => {
  const { user } = useAuth0();
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.nickname);
  const [role, setRole] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [autoUpdate, setAutoUpdate] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission
  };

  return (
    <SettingsContainer>
      <Global styles={GlobalStyle} />
      <Title>Settings</Title>
      <SettingsForm onSubmit={handleSubmit}>
        <FieldContainer>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
          />
        </FieldContainer>
        <FieldContainer>
          <Label>Username</Label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled
          />
        </FieldContainer>
        <FieldContainer>
          <Label>Role</Label>
          <Select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </Select>
        </FieldContainer>
        <OptionContainer>
          <LabelToggle>Dark Mode</LabelToggle>
          <ToggleSwitch>
            <ToggleInput
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <ToggleSlider checked={darkMode} />
          </ToggleSwitch>
        </OptionContainer>
        <OptionContainer>
          <LabelToggle>Enable Notifications</LabelToggle>
          <ToggleSwitch>
            <ToggleInput
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <ToggleSlider checked={notifications} />
          </ToggleSwitch>
        </OptionContainer>
        <OptionContainer>
          <LabelToggle>Enable Auto-Update</LabelToggle>
          <ToggleSwitch>
            <ToggleInput
              type="checkbox"
              checked={autoUpdate}
              onChange={() => setAutoUpdate(!autoUpdate)}
            />
            <ToggleSlider checked={autoUpdate} />
          </ToggleSwitch>
        </OptionContainer>
      </SettingsForm>
      <FooterWithDate />
    </SettingsContainer>
  );
};

export default SettingsPage;
