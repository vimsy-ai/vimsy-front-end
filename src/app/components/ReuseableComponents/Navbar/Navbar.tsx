"use client";
import React from "react";
import styled from "styled-components";
import Typography from "../Typography";

const Container = styled.div`
  padding: 15px 50px;
  display: flex;
  flex-direction: column; /* Stack children vertically */
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 0;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%; /* Ensure it takes full width */
`;

const Center = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  justify-content: center;
  width: 100%; /* Ensure it takes full width */
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%; /* Ensure it takes full width */
`;

const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0.5px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = () => {
  return (
    <Container>
      <Left>Vimsy</Left>
      <Right></Right>
      <Center>
        {/* <Typography styling="font-weight:500; font-size:20px; background: var(--font);-webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Home
        </Typography>
        <Typography styling="font-weight:500; font-size:20px; background: var(--font);-webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          About
        </Typography>
        <Typography styling="font-weight:500; font-size:20px; background: var(--font);-webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Contact
        </Typography> */}
      </Center>
    </Container>
  );
};

export default Navbar;
