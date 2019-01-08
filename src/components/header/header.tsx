import React from "react";
import styled from "styled-components";
import { Flex, Box, AlignItems } from "../flexbox";
import Logo from "../logo/logo";
import { router } from "../../router";
const Contanier = styled(Flex)`
  background-color: ${props => props.theme.palette.gray.G1};
`;

type HeaderProps = React.HTMLAttributes<HTMLDivElement>;
const Header = (props: HeaderProps) => {
  return (
    <Contanier align={AlignItems.CENTER} height={4}>
      <Box paddingX={3}>
        <Logo onClick={navigate} />
      </Box>
      {props.children}
    </Contanier>
  );
};

function navigate() {
  router.navigate("dashboard");
}

export default Header;
