import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#000d1a" : "cd853f")};
  min-width: 6.2rem;
  max-width: 12, 5rem;
  padding: ${({ big }) => (big ? "16px 40px" : "14px 24px")};
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  color: ${({ primary }) => (primary ? "#fff" : "#000d1a")};
  font-size: ${({ big }) => (big ? "1rem" : "#0.9rem")};
  white-space: nowrap;
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }
`;
