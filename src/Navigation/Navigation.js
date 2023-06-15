import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { FaUser, FaCog } from "react-icons/fa";
import HomeIcon from "@mui/icons-material/Home";
import { useAuth0 } from "@auth0/auth0-react";
// Local Imports
import pulseLogoSmall from "../images/pulseLogoSmall.png";
import LoginButton from "../components/buttons/loginButton";
import LogoutButton from "../components/buttons/logoutButton";
import LoginPage from "../pages/loginPage/loginPage";

const Nav = styled.nav`
  font-size: 1.3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

// const IconWrapper = styled.span`
//   margin-right: 0.5rem;
// `;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  margin: 0 12px;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  &:hover {
    color: #fca311;
  }
  &:active {
    color: #eb5e28;
`;

// const IconWrapper = styled.span`
//   margin-right: 0.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 10px;
// `;

const LeftNav = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    color: "#fca311";
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
  transition: background-color 0.3s ease;
  font-size: 1.2rem;
  font: inherit;
  display: flex;
  align-items: center; 
  justify-content: center;
  margin-right: 10px;
  &:hover {
    background-color: #fca311;
  }
  &:active {
    background-color: #eb5e28;
  }
`;

const IconWrapper = styled.span`
  margin-right: 5px;
  font-size: 1.2rem;
`;

const Navigation = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Nav>
      <LeftNav>
        <Logo src={pulseLogoSmall} alt="Logo" />
        <NavLink to="/">
          <IconWrapper>
            <HomeIcon />
          </IconWrapper>
        </NavLink>
        {isAuthenticated && (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/search">Database</NavLink>
          </>
        )}
      </LeftNav>
      <RightNav>
        {isAuthenticated ? (
          <>
            <NavLink to="/settings">
              <IconWrapper>
                <FaCog />
              </IconWrapper>
              Settings
            </NavLink>
            <Button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              <IconWrapper>
                <FaUser />
              </IconWrapper>
              Log Out
            </Button>
          </>
        ) : (
          <Button onClick={() => loginWithRedirect()}>
            <IconWrapper>
              <FaUser />
            </IconWrapper>
            Log In
          </Button>
        )}
      </RightNav>
    </Nav>
  );
};

export default Navigation;
