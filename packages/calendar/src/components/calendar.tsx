import React from "react";
import { Day } from "../models/day";
import { Day as DayComponent } from "./day/";
import { Flex, FlexWrap, Box, FlexDirection } from "@macrop/flexbox";
import { CalendarEvent, EventType } from "../models/event";
import { Event } from "./day/event";
import { Header } from "./header";
interface CalendarProps {
  calendar: Day[];
}

const data: Day[] = [
  {
    day: new Date(),
    events: [
      {
        type: EventType.TASK,
        name: "FE MEETING",
        start_time: new Date(),
        end_time: new Date(),
        id: 1
      }
    ]
  }
];

const Calendar = (props: CalendarProps) => {
  const { calendar } = props;

  console.log(calendar);
  return (
    <Flex direction={FlexDirection.COLUMN} wrap={FlexWrap.WRAP}>
      <Header />
      {getDays(data)}
    </Flex>
  );
};

function getDays(calendar: Day[]) {
  if (!calendar) {
    return;
  }
  return calendar.map((day: Day, index: number) => (
    <Box key={index}>
      <DayComponent>{getEvents(day.events)}</DayComponent>
    </Box>
  ));
}

function getEvents(events: CalendarEvent[]) {
  return events.map((event, index) => <Event key={index} event={event} />);
}

export default Calendar;
