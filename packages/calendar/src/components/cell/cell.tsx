import React from "react";
import { Flex, FlexDirection } from "@macrop/flexbox";
import styled from "styled-components";
import moment from "moment";

const Container = styled(Flex)<{ selected?: boolean }>`
  min-height: 120px;
  border: 1px solid ${props => (props.selected ? "green" : "#777")};
  &:hover {
    border: 1px solid powderblue;
  }
`;

interface DayProps {
  children?: any;
  selected?: boolean;
  date: moment.Moment;
  onClick?: (date: moment.Moment) => void;
}

const Day = (props: DayProps) => {
  const { children, selected, date } = props;
  return (
    <Container
      height="100%"
      selected={selected}
      direction={FlexDirection.COLUMN}
      width="100%"
    >
      {children}
    </Container>
  );
};

export default Day;
