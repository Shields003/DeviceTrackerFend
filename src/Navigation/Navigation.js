import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { FaUser, FaCog } from "react-icons/fa";
import HomeIcon from "@mui/icons-material/Home";
import { useAuth0 } from "@auth0/auth0-react";
// Local Imports
import pulseLogoSmall from "../images/pulseLogoSmall.png";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  border-bottom: 1px outset white;
  height: 60px;
  font-family: optima, sans-serif;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  margin: 0 12px;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  &:hover {
    color: #f59311;
  }
  &:active {
    color: #eb5e28;
`;

const RightNav = styled.div`
  margin-left: auto;
  margin-top: 8px;
  display: flex;
  align-items: center;
  font-size: inherit;
  font-style: inherit;
  &:hover {
    color: "#f59311";
  }
`;

const LeftNav = styled.div`
  display: flex;
  align-items: center;
  font-size: inherit;
  font-style: inherit;
  &:hover {
    color: "#f59311";
  }
`;

const Logo = styled.img`
  height: 30px;
  width: 200px;
  object-fit: contain;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: inherit;
  font: inherit;
  display: flex;
  align-items: baseline;
  justify-content: center;
  &:hover {
    color: #f59311;
  }
  &:active {
    color: #eb5e28;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  font-size: 1rem;
`;

const UserName = styled.div`
  font-size: inherit;
  font-style: inherit;
  margin-right: 1rem;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const LogIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
`;

const HomeIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  margin-top: 6px;
`;

const TextWrapper = styled.div`
  font-size: inherit;
  font-style: inherit;
  padding-left: 0.5rem;
`;

const Navigation = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <Nav>
      <LeftNav>
        <NavLink to="/">
          <Logo src={pulseLogoSmall} alt="Logo" />
        </NavLink>
        {isAuthenticated && (
          <NavWrapper>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/map">Map</NavLink>
            <NavLink to="/search">Database</NavLink>
          </NavWrapper>
        )}
      </LeftNav>
      <RightNav>
        {isAuthenticated && (
          <>
            
            <UserName>Welcome, {user.name}</UserName>
            <NavLink to="/settings">
              <IconWrapper>
                <FaCog />
              </IconWrapper>
              
            </NavLink>
            <Button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              <LogIconWrapper>
                <LogoutIcon />
                <TextWrapper></TextWrapper>
              </LogIconWrapper>
            </Button>
          </>
        )}
        {!isAuthenticated && (
          <Button onClick={() => loginWithRedirect()}>
            <LogIconWrapper>
              <LoginIcon />
              <TextWrapper>Log In</TextWrapper>
            </LogIconWrapper>
          </Button>
        )}
      </RightNav>
    </Nav>
  );
};

export default Navigation;
