import { Zap } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  border-top: 1px solid #e5e7eb;
  background-color: #ffffff;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem 1rem;
  @media (min-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 200px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const BrandSection = styled.div`
  grid-column: span 2;
  @media (min-width: 768px) {
    grid-column: span 1;
  }
`;

const BrandWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const BrandDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const Column = styled.div`
  h3 {
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledLink = styled(Link)`
  font-size: 0.875rem;
  color: #6b7280;
  text-decoration: none;
  &:hover {
    color: #16a34a;
  }
`;

const Divider = styled.div`
  border-top: 1px solid #e5e7eb;
  margin-top: 2rem;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const SocialLink = styled(Link)`
  color: #6b7280;
  &:hover {
    color: #0069a3;
  }
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Grid>
          <BrandSection>
            <BrandWrapper>
              <Zap className="h-5 w-5 text-blue-600" />
              <span>Vimsy</span>
            </BrandWrapper>
            <BrandDescription>
              AI-powered marketing templates and custom bot solutions for modern
              businesses.
            </BrandDescription>
          </BrandSection>
          <Column>
            <h3>Product</h3>
            <LinkList>
              <li>
                <StyledLink href="#features">Features</StyledLink>
              </li>
              <li>
                <StyledLink href="#pricing">Pricing</StyledLink>
              </li>
              <li>
                <StyledLink href="#">Integrations</StyledLink>
              </li>
            </LinkList>
          </Column>
          <Column>
            <h3>Company</h3>
            <LinkList>
              <li>
                <StyledLink href="#">About</StyledLink>
              </li>
              <li>
                <StyledLink href="#">Blog</StyledLink>
              </li>
              <li>
                <StyledLink href="#">Careers</StyledLink>
              </li>
            </LinkList>
          </Column>
          <Column>
            <h3>Legal</h3>
            <LinkList>
              <li>
                <StyledLink href="#">Privacy</StyledLink>
              </li>
              <li>
                <StyledLink href="#">Terms</StyledLink>
              </li>
              <li>
                <StyledLink href="#">Cookie Policy</StyledLink>
              </li>
            </LinkList>
          </Column>
        </Grid>
        <Divider>
          <Copyright>
            © {new Date().getFullYear()} Vimsy. All rights reserved.
          </Copyright>
          <SocialLinks>
            <SocialLink href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </SocialLink>
            <SocialLink href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </SocialLink>
            <SocialLink href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </SocialLink>
          </SocialLinks>
        </Divider>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
