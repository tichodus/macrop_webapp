import React from "react";
import { Flex, FlexDirection } from "@macrop/flexbox";
import styled from "styled-components";

const Container = styled(Flex)`
    min-height:100px
    border:1px solid black;

    &:hover {
        border: 1px solid powderblue;
    }
`;

interface DayProps {
  children?: any;
}

const Day = (props: DayProps) => {
  const { children } = props;
  return (
    <Container direction={FlexDirection.COLUMN} width="100%">
      {children}
    </Container>
  );
};

export default Day;
