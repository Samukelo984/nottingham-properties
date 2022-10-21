import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { menuData } from "../../data/MenuData";
import { Button } from "../button/Button";
import { FaTimes } from "react-icons/fa";

const SidebarContainer = styled.div`
  position: fixed;
  z-index: 30;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
  cursor: pointer;
`;
const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`;
const SidebarWrapper = styled.div``;
const SidebarMenu = styled.div`
  display: grid;
  grid-template-column: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #000d1a;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {menuData.map((item, index) => (
            <SidebarLink to={item.link} key={index}>
              {item.title}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <BtnWrap>
          <Button primary="true" round="true" big="true" to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
