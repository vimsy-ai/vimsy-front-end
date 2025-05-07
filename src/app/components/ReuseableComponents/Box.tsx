import styled from "styled-components";

interface BoxProps {
  type?: 'tall' | 'wide' | 'none';
}

interface Pins3Props {
  nav?: string;
  name?: string;
  mute?: boolean;
  active?: string;
}

export const Box = styled.div<BoxProps>`
  font-size: 0.9rem;
  padding: ${({ type }) =>
    type === "tall"
      ? "20px 10px"
      : type === "wide"
      ? "10px 20px"
      : type === "none"
      ? "0px"
      : "10px"};
`;

export const Pins = styled.div`
  background-color: var(--primary);
  color: #fff;
  align-self: flex-start;
  font-weight: 600;
  margin-top: 10px;
  font-size: 0.9rem;
  border-radius: 5px;
  padding: 8px 20px;
`;

export const Pins2 = styled.a`
  background-color: var(--light);
  align-self: flex-start;
  font-weight: 600;
  color: #338db8;
  position: relative;
  font-size: 0.8rem;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid var(--primary);
  border-radius: 20px;
  padding: 5px 15px;
  &:hover {
    opacity: 0.8;
  }
  &:visited {
    color: #338db8;
  }
`;

export const Pins3 = styled.span<Pins3Props>`
  background-color: ${({ nav, name }) =>
    nav === name ? "var(--primary)" : "#e7eaeb"};
  align-self: flex-start;
  font-weight: 600;
  color: ${({ nav, name }) => (nav === name ? "#fff" : "var(--primary)")};
  margin: 0 10px;
  font-size: 0.9rem;
  text-decoration: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 8px 20px;
  pointer-events: ${({ mute, active, name }) =>
    mute && (active === name ? "auto" : "none")};
  background-color: ${({ mute, active, name }) =>
    mute && (active === name ? "var(--primary)" : "#E7EAEB")};
  color: ${({ mute, active, name }) =>
    mute && (active === name ? "#fff" : "#989898")};
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavCapsules = styled.a`
  background-color: #006aa356;
  color: var(--font-dark-2);
  padding: 8px 15px;
  border-radius: 20px;
  display: flex;
  gap: 5px;
  font-weight: 500;
  text-decoration: none;
  align-items: center;
  min-width: max-content;
`;