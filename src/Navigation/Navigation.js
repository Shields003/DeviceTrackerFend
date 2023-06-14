import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { FaUser, FaCog } from "react-icons/fa";
import HomeIcon from "@mui/icons-material/Home";
// Local Imports
import pulseLogoSmall from "../images/pulseLogoSmall.png";
import loginButton from "../components/buttons/loginButton";
import logoutButton from "../components/buttons/logoutButton";

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

// const NavLink = styled(Link)`
//   color: ${({ theme }) => theme.colors.text};
//   text-decoration: none;
//   margin: 0 1rem;
//   display: flex;
//   align-items: center;
// `;

// const LeftNav = styled.div`
//   display: flex;
//   align-items: center;
// `;

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
    color: #fca311; // Change this to the color you want on hover
  }
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
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

const Navigation = () => {
  return (
    <Nav>
      <LeftNav>
        <Logo src={pulseLogoSmall} alt="Logo" />
        <NavLink to="/">
          <IconWrapper>
            <HomeIcon />
          </IconWrapper>
        </NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/search">Database</NavLink>
      </LeftNav>
      <RightNav>
        <NavLink to="/login">
          <IconWrapper>
            <FaUser />
          </IconWrapper>
          Login
        </NavLink>
        <NavLink to="/settings">
          <IconWrapper>
            <FaCog />
          </IconWrapper>
          Settings
        </NavLink>
      </RightNav>
    </Nav>
  );
};

export default Navigation;
