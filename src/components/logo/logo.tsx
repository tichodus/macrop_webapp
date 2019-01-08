import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 64px;
  height: 64px;
  cursor: pointer;
`;

type LogoProps = React.ImgHTMLAttributes<HTMLImageElement>;

const Logo = (props: LogoProps) => {
  const { onClick } = props;
  return <Image onClick={onClick} src="assets/logo.png" />;
};

export default Logo;
