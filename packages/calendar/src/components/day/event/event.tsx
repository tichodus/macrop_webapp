import React from "react";
import styled from "styled-components";
import { Flex, Box, JustifyContent, AlignItems } from "@macrop/flexbox";
import { CalendarEvent, EventType } from "../../../models/event";
import ClockIcon from "mdi-react/ClockIcon";

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
  height: 50px;
  background-color: ${props => getBgColor(props.eventType)};

  &:hover {
    opacity: 0.7;
  }
`;

interface Props {
  event: CalendarEvent;
  onClick?: (event: CalendarEvent) => void;
}

const Event = (props: Props) => {
  const { event, onClick } = props;
  return (
    <Container
      onClick={handleClick}
      paddingX={2}
      eventType={event.type}
      align={AlignItems.CENTER}
    >
      <Box style={{ color: "white" }} width="100%">
        {event.name}
      </Box>
      <Flex width="100%" justify={JustifyContent.FLEX_END}>
        <Flex align={AlignItems.CENTER} style={{ color: "white" }}>
          <Box paddingX={1}>
            <ClockIcon />{" "}
          </Box>
          {event.start_time.getHours()} -{event.end_time.getHours()}
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
