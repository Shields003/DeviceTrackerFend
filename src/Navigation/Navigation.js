import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { FaUser, FaCog } from "react-icons/fa";

const Nav = styled.nav`
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  margin: 0 1rem;
  display: flex;
  align-items: center;
`;

const LeftNav = styled.div`
  display: flex;
  align-items: center;
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
`;

const Navigation = () => {
  return (
    <Nav>
      <LeftNav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/search">Search Devices</NavLink>
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
