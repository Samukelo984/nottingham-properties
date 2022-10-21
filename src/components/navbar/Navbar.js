import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../../data/MenuData";
import { Button } from "../button/Button";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  width: 100%;
  height: 3.7rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 20;
  background: red;
`;

const NavLink = css`
  height: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;

const Logo = styled(Link)`
  ${NavLink}
  color: #fff;
`;

const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 2rem;
    height: auto;
    cursor: pointer;
  }
`;
const NavMenu = styled.div`
  margin-right: --48px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  margin-right: 1.4rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <section className="navbar">
      <Nav>
        <Logo>Nottingham Properties</Logo>
        <MenuBars />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavMenuLinks to={item.link} key={index}>
              {item.title}
            </NavMenuLinks>
          ))}
        </NavMenu>

        <NavBtn>
          <Button to="/contact" primary={true}>
            Contact Us
          </Button>
        </NavBtn>
      </Nav>
    </section>
  );
};

export default Navbar;
