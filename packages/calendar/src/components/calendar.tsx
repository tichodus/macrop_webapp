import React, { useState } from "react";
import { Day } from "../models/day";
import { Flex, FlexWrap, FlexDirection } from "@macrop/flexbox";
import { Header } from "./header";
import { Weekdays } from "./weekdays";
import { Cells } from "./cells";
import moment from "moment";
import styled from "styled-components";

interface CalendarProps {
  calendar: Day[];
  onChange?: (date: moment.Moment) => void;
  onAddEvent?: (date: moment.Moment) => void;
}

const Container = styled(Flex)`
  background: white;
`;

const Calendar = (props: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(moment());

  const { onChange, calendar, onAddEvent } = props;

  const handleDateChange = (date: moment.Moment) => {
    setCurrentDate(date);
    onChange && onChange(date);
  };

  return (
    <Container direction={FlexDirection.COLUMN} wrap={FlexWrap.WRAP}>
      <Header date={moment(currentDate)} onChange={handleDateChange} />
      <Weekdays />
      <Cells
        onAddEvent={onAddEvent}
        data={calendar}
        currentDate={currentDate}
      />
    </Container>
  );
};

// function getEvents(events: CalendarEvent[]) {
//   return events.map((event, index) => <Event key={index} event={event} />);
// }

export default Calendar;
