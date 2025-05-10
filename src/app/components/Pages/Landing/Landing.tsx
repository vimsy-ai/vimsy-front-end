"use client";
import React from "react";
import styled, { keyframes } from "styled-components";
import Typography from "../../ReuseableComponents/Typography";
import { MdArrowOutward } from "react-icons/md";
import Navbar from "../../ReuseableComponents/Navbar/Navbar";
import Image from "next/image";
import {
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Zap } from "lucide-react";
import Footer from "../../ReuseableComponents/Footer/Footer";
// import { Button } from "@/components/ui/button";

// Animations
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;


interface SocialIconProps {
  $shadowColor?: string;
  $rotate?: string;
  $delay?: string;
  $glowColor?: string;
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Main = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  flex-direction: row;
  padding: 0;
  margin: 0;
  z-index: 1;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    padding: 0;
  }
`;

const Left = styled.div`
  padding: 0px 10px 0px 80px;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  height: 100%;
  z-index: 999;
  width: 65%;
  position: relative;
  background: none;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    align-items: flex-start;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/assets/bg2.svg") no-repeat left bottom;
    background-size: 500px 500px;
    filter: drop-shadow(0px 0px 90px rgba(0, 105, 163, 0.3));
    z-index: -1;
    @media (min-width: 1200px) {
      background-size: 600px 600px;
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  position: relative;
  background: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/assets/bg1.svg") no-repeat left;
    background-size: 800px 900px;
    filter: drop-shadow(0px 0px 90px rgba(0, 105, 163, 0.3));
    z-index: -1;
    @media (min-width: 1200px) {
      background-size: 1000px 1100px;
    }
  }
`;

const Middle = styled.div`
  width: 100%;
  padding: 100px 80px;
  z-index: 1;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  gap: 10px;
  line-height: 10px;
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  padding-top: 40px;
`;

const Card = styled.div`
  width: 300px;
  height: 270px;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  transition: border-left 0.3s ease;

  &:hover {
    border-left: 5px solid rgba(0, 0, 0, 0.5);
  }
`;

const SocialIcon = styled.div<SocialIconProps>`
  position: absolute;
  z-index: 3;
  filter: drop-shadow(0 8px 24px ${(props) => props.$shadowColor || "#000"}aa);
  transform: rotate(${(props) => props.$rotate || "0deg"}) scale(1.2);
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay || "0s"};

  &::before {
    content: "";
    position: absolute;
    left: -15px;
    top: -15px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      ${(props) => props.$glowColor || "#fff"}55 0%,
      transparent 70%
    );
    z-index: -1;
    filter: blur(3px);
    animation: ${pulse} 3s ease-in-out infinite;
    animation-delay: ${(props) => props.$delay || "0s"};
  }
`;

const Bottom = styled.div`
  width: 100%;
  padding: 0px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 100px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

const Waitlist = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
`;


const Landing = () => {
  return (
    <Wrapper>
      <Container>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1,
          }}
        >
          <Navbar />
        </div>
        <Main>
          <Left>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                justifyContent: "flex-start",
                border: "1px solid #000",
                width: "fit-content",
                padding: "5px 20px",
                borderRadius: "25px",
              }}
            >
              <Typography styling="font-weight: 600; font-size: 15px; color: #000;">
                Supercharged by AI
              </Typography>
              <Zap className="h-5 w-5 text-blue-600" />
            </div>
            
            <Typography styling="font-weight: 700; font-size: 60px; line-height: 80px; color: #000;">
              AI Powered Marketing Templates
            </Typography>
            <div style={{ width: "80%" }}>
              <Typography styling="font-weight: 500; font-size: 20px; line-height: 30px; color: rgba(0,0,0,0.5);">
                Generate engaging content for X, Telegram, WhatsApp, and email
                campaigns. Or get a custom branded bot tailored to your
                business.
              </Typography>
            </div>
          </Left>
          <Right>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "950px",
                height: "auto",
                minHeight: "400px",
                margin: 0,
                padding: 0,
              }}
            >
              {/* Social Media Icons with improved positioning and styling */}
              <SocialIcon
                style={{ left: "10%", top: "5%" }}
                $rotate="-15deg"
                $shadowColor="#833ab4"
                $glowColor="#E1306C"
                $delay="0.2s"
              >
                <FaInstagram size={50} color="#E1306C" />
              </SocialIcon>

              <SocialIcon
                style={{ left: "75%", top: "5%" }}
                $rotate="10deg"
                $shadowColor="#229ED9"
                $glowColor="#229ED9"
                $delay="0.4s"
              >
                <FaTelegram size={50} color="#229ED9" />
              </SocialIcon>

              <SocialIcon
                style={{ left: "87%", top: "40%" }}
                $rotate="20deg"
                $shadowColor="#25D366"
                $glowColor="#25D366"
                $delay="0.6s"
              >
                <FaWhatsapp size={50} color="#25D366" />
              </SocialIcon>

              <SocialIcon
                style={{ left: "0%", top: "60%" }}
                $rotate="-10deg"
                $shadowColor="#000"
                $glowColor="#fff"
                $delay="0.8s"
              >
                <FaXTwitter size={50} color="#000" />
              </SocialIcon>

              <SocialIcon
                style={{ position: "absolute", left: "50%", bottom: "115%" }}
                $rotate="5deg"
                $shadowColor="#EA4335"
                $glowColor="#EA4335"
                $delay="1s"
              >
                <SiGmail size={50} color="#EA4335" />
              </SocialIcon>

              <SocialIcon
                style={{ left: "75%", top: "80%" }}
                $rotate="8deg"
                $shadowColor="#0077B5"
                $glowColor="#0077B5"
                $delay="0.3s"
              >
                <FaLinkedin size={50} color="#0077B5" />
              </SocialIcon>

              <SocialIcon
                style={{ left: "18%", top: "100%" }}
                $rotate="-8deg"
                $shadowColor="#1877F2"
                $glowColor="#1877F2"
                $delay="0.7s"
              >
                <FaFacebook size={50} color="#1877F2" />
              </SocialIcon>

              <Image
                src="/assets/TelegramChatModal.png"
                alt="Telegram ChatBot"
                width={600}
                height={600}
                style={{
                  position: "absolute",
                  right: "15%",
                  top: "-100px",
                  width: "74%",
                  height: "auto",
                  pointerEvents: "none",
                }}
                priority
              />
            </div>
          </Right>
        </Main>

        <Middle>
          <LeftSection>
            <Typography styling="font-weight: 600; font-size: 45px; color: #000; line-height: 55px;">
              Everything you need for AI-Powered marketing{" "}
            </Typography>
            <Typography styling="font-weight: 400; font-size: 20px; line-height: 30px; color: rgba(0,0,0,0.5);">
              From content generation to custom bots, we have got you covered.
            </Typography>
          </LeftSection>
          <Cards>
            <Card>
              <Typography styling="font-weight: 600; font-size: 25px; color: #000; height: 60px;">
                Multi-Channel Content
              </Typography>
              <Typography styling="font-weight: 400; font-size: 18px; color: rgba(0,0,0,0.5);">
                Generate engaging content for X, Telegram, WhatsApp, and email
                campaigns with just a few clicks.
              </Typography>
            </Card>
            <Card>
              <Typography styling="font-weight: 600; font-size: 25px; color: #000; height: 60px;">
                Custom Bot Development{" "}
              </Typography>
              <Typography styling="font-weight: 400; font-size: 18px; color: rgba(0,0,0,0.5);">
                Get a custom branded bot built specifically for your business
                needs with our freelance service.
              </Typography>
            </Card>
            <Card>
              <Typography styling="font-weight: 600; font-size: 25px; color: #000; height: 60px;">
                Analytics & Performance{" "}
              </Typography>
              <Typography styling="font-weight: 400; font-size: 18px; color: rgba(0,0,0,0.5);">
                Track engagement metrics and optimize your marketing campaigns
                with built-in analytics.
              </Typography>
            </Card>
            <Card>
              <Typography styling="font-weight: 600; font-size: 25px; color: #000; height: 60px;">
                Multi-Platform Support
              </Typography>
              <Typography styling="font-weight: 400; font-size: 18px; color: rgba(0,0,0,0.5);">
                Seamlessly integrate with X (Twitter), Telegram, WhatsApp, and
                email platforms for unified marketing.
              </Typography>
            </Card>
          </Cards>
        </Middle>

        <Bottom>
          <Title>
            <Typography styling="font-weight: 600; font-size: 45px; color: #000; line-height: 55px;">
              Stay Tuned - Coming Soon
            </Typography>
            <Typography styling="font-weight: 400; font-size: 20px; line-height: 30px; color: rgba(0,0,0,0.5); width: 49%; text-align: center;">
              We are finalizing our pricing plans to offer you the best value.
              Sign up for our waitlist to be the first to know when we launch.
            </Typography>{" "}
          </Title>
          <Waitlist>
            <input
              type="text"
              placeholder="Enter your email address"
              style={{
                width: "400px",
                borderRadius: "30px",
                padding: "10px 20px",
                border: "1px solid #000",
                fontSize: "15px",
                fontWeight: "500",
              }}
            />
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                justifyContent: "flex-start",
                border: "1px solid #000",
                width: "fit-content",
                padding: "10px 20px",
                borderRadius: "25px",
              }}
            >
              <Typography styling="font-weight: 600; font-size: 15px; color: #000;">
                Join the Waitlist
              </Typography>
              <MdArrowOutward size={24} color="black" />
            </div>
          </Waitlist>
          <Typography styling="font-weight: 400; font-size: 15px; line-height: 20px; color: rgba(0,0,0,0.5); width: 40%; text-align: center;">
            By joining our waitlist, you will receive exclusive early access and
            special launch discounts.
          </Typography>
        </Bottom>
      </Container>
      <Footer/>
    </Wrapper>
  );
};

export default Landing;
