import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

interface StyledProps {
  styling?: string;
  innerStyling?: string;
}

const H1 = styled.h1<StyledProps>`
  font-size: 2.752rem;
  font-weight: 600;
  ${({ styling }) => styling}
`;

const H2 = styled.h2<StyledProps>`
  font-size: 2.141rem;
  font-weight: 600;
  ${({ styling }) => styling}
`;

const H3 = styled.h3<StyledProps>`
  font-size: 1.653rem;
  font-weight: 600;
  ${({ styling }) => styling}
`;

const H4 = styled.h4<StyledProps>`
  font-size: 1.163rem;
  font-weight: 600;
  ${({ styling }) => styling}
`;

const H5 = styled.h5<StyledProps>`
  font-size: 1rem;
  font-weight: 600;
  ${({ styling }) => styling}
`;

const SPAN = styled.span<StyledProps>`
  font-size: 0.9rem;
  font-weight: 400;
  ${({ styling }) => styling}
`;

const P = styled.p<StyledProps>`
  font-size: 0.9rem;
  font-weight: 400;
  ${({ styling }) => styling}
`;

const A = styled.a<StyledProps>`
  font-size: 0.9rem;
  font-weight: 400;
  color: #001744;
  transition: all 0.3s ease;
  text-decoration: underline;
  &:hover {
    font-weight: 500;
    text-decoration: none;
  }
  ${({ styling }) => styling}
`;

const Div = styled.div<StyledProps>`
  ${({ styling }) => styling}
  ${({ innerStyling }) => innerStyling}
`;

interface TypographyProps {
  children?: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p' | 'a' | 'quill';
  styling?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  dataAos?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant,
  styling,
  href,
  target,
  onClick,
  dataAos,
}) => {
  switch (variant) {
    case "h1":
      return (
        <H1 data-aos={dataAos} onClick={onClick} styling={styling}>
          {children}
        </H1>
      );
    case "h2":
      return (
        <H2 data-aos={dataAos} onClick={onClick} styling={styling}>
          {children}
        </H2>
      );
    case "h3":
      return (
        <H3 data-aos={dataAos} onClick={onClick} styling={styling}>
          {children}
        </H3>
      );
    case "h4":
      return (
        <H4 data-aos={dataAos} onClick={onClick} styling={styling}>
          {children}
        </H4>
      );
    case "h5":
      return (
        <H5 data-aos={dataAos} onClick={onClick} styling={styling}>
          {children}
        </H5>
      );
    case "span":
      return (
        <SPAN data-aos={dataAos} onClick={onClick} styling={styling}>
          {children}
        </SPAN>
      );
    case "p":
      return (
        <P data-aos={dataAos} onClick={onClick} styling={styling}>
          {children}
        </P>
      );
    case "quill":
      return (
        <Div
          onClick={onClick}
          styling={styling}
          className="quill quill-editor"
        >
          <Div onClick={onClick} className="ql-container ql-bubble ql-disabled">
            <Div onClick={onClick} styling={styling} className="ql-editor">
              {children}
            </Div>
          </Div>
        </Div>
      );
    case "a":
      return (
        <A
          data-aos={dataAos}
          onClick={onClick}
          href={href}
          styling={styling}
          target={target}
        >
          {children}
        </A>
      );
    default:
      return (
        <P data-aos={dataAos} onClick={onClick} styling={styling}>
          {children}
        </P>
      );
  }
};

Typography.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "span",
    "p",
    "a",
    "quill",
  ]),
  styling: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  dataAos: PropTypes.string,
};

export default Typography;
