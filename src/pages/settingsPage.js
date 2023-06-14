import React, { useState } from "react";
import styled from "@emotion/styled";
import Footer from "../components/footer/footer";

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
  width: 400px;
  height: 200px;
  padding: 2em;
  border: 4px solid #284b63;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23);
`;

const Title = styled.h1`
  margin-top: -15em;
  font-size: 2rem;
  text-align: center;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  color: ${theme.colors.dark};
  margin-bottom: 0.5rem;
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [autoUpdate, setAutoUpdate] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission
  };

  return (
    <SettingsContainer>
      <Title>Settings</Title>
      <SettingsForm onSubmit={handleSubmit}>
        <OptionContainer>
          <Label>Dark Mode</Label>
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
          <Label>Enable Notifications</Label>
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
          <Label>Enable Auto-Update</Label>
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
      <Footer />
    </SettingsContainer>
  );
};

export default SettingsPage;
