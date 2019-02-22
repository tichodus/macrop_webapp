import React from "react";
import styled from "styled-components";
import { Flex, Box, JustifyContent, AlignItems } from "@macrop/flexbox";
import { CalendarEvent, EventType } from "../../../models/event";
import ClockIcon from "mdi-react/ClockIcon";
import moment from "moment";

const PARTY = "#DD355B";
const MEETING = "#01A0FE";
const TASK = "#B6ACA2";

const getBgColor = (eventType: EventType) => {
  switch (eventType) {
    case EventType.MEETING:
      return MEETING;
    case EventType.PARTY:
      return PARTY;
    case EventType.TASK:
      return TASK;
  }
};

const Container = styled(Flex)<{ eventType: EventType }>`
  height: 35px;
  background-color: ${props => getBgColor(props.eventType)};

  &:hover {
    opacity: 0.7;
  }
`;

const StyledBox = styled(Box)`
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface Props {
  event: CalendarEvent;
  onClick?: (event: CalendarEvent) => void;
}

const Event = (props: Props) => {
  const { event, onClick } = props;
  const time = `${moment(event.start_time).hours()} - ${moment(
    event.end_time
  ).hours()}`;

  return (
    <Container
      onClick={handleClick}
      paddingX={1}
      marginY={1}
      eventType={event.type}
      align={AlignItems.CENTER}
    >
      <StyledBox width={200} title={event.name}>
        {event.name}
      </StyledBox>
      <Flex width="100%" justify={JustifyContent.FLEX_END}>
        <Flex align={AlignItems.CENTER} style={{ color: "white" }}>
          <Box paddingX={1}>
            <ClockIcon />
          </Box>
          <StyledBox width={50} title={time}>
            {time}
          </StyledBox>
        </Flex>
      </Flex>
    </Container>
  );

  function handleClick() {
    if (onClick) {
      onClick(event);
    }
  }
};

export default Event;
