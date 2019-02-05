import React from "react";
import { Day } from "../../models";
import { Cell } from "../cell";
import moment from "moment";
import {
  Box,
  Flex,
  FlexWrap,
  FlexDirection,
  JustifyContent
} from "@macrop/flexbox";
import styled, { css } from "styled-components";
import Event from "../cell/event/event";
import { IconButton } from "@material-ui/core";
import PlusIcon from "mdi-react/PlusIcon";

enum SPAN_COLOR {
  GRAY = "#aaa",
  BLACK = "#000"
}

const Span = styled.span<{ currentMonth: boolean; currentDay: boolean }>`
  padding: 5px;
  margin: 2px;
  font-size: 18px;
  color: ${props => (!props.currentMonth ? SPAN_COLOR.GRAY : SPAN_COLOR.BLACK)};
  font-weight: ${props => (props.currentMonth ? 700 : 400)};
  ${props =>
    props.currentDay &&
    css`
      border-radius: 100%;
      width: 20px;
      background: ${props => props.theme.palette.primary};
      color: white;
    `}
`;

interface Props {
  data: Day[];
  currentDate: moment.Moment;
  onDaySelected?: (date: moment.Moment) => void;
  onAddEvent?: (date: moment.Moment) => void;
}

export const Cells = (props: Props) => {
  const { currentDate, data, onAddEvent } = props;

  const days = generateDays(currentDate.clone(), data, onAddEvent);

  return (
    <Flex wrap={FlexWrap.WRAP} className="body">
      {days}
    </Flex>
  );
};

const generateDays = (
  currentDate: moment.Moment,
  calendar: Day[],
  onAddEvent?: (date: moment.Moment) => void
) => {
  const startOfMonth = moment(currentDate).startOf("month");
  const currentMonth = startOfMonth.month();
  const firstDay = startOfMonth.day();

  const addEvent = (date: moment.Moment) => () => {
    if (onAddEvent) {
      onAddEvent(date);
    }
  };

  let days = [];
  let cells = [];
  startOfMonth.subtract(firstDay - 1, "day");
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 7; j++) {
      const events = getEventsForDay(calendar, startOfMonth);

      cells.push(
        <Box width={1 / 7} key={i * 7 + j}>
          <Cell date={startOfMonth.clone()}>
            <Flex direction={FlexDirection.COLUMN}>
              <Flex>
                <Span
                  currentDay={moment(startOfMonth)
                    .startOf("day")
                    .isSame(moment().startOf("day"))}
                  currentMonth={currentMonth === startOfMonth.month()}
                >
                  {startOfMonth.format("DD")}
                </Span>
                <Flex width="100%" justify={JustifyContent.FLEX_END}>
                  <IconButton
                    onClick={addEvent(startOfMonth.clone())}
                    style={{ padding: 0 }}
                  >
                    <PlusIcon />
                  </IconButton>
                </Flex>
              </Flex>
              {events &&
                events.map(event => <Event key={event.id} event={event} />)}
            </Flex>
          </Cell>
        </Box>
      );
      startOfMonth.add(1, "day");
    }
    days.push(<Flex width="100%">{cells}</Flex>);
    cells = [];
  }
  return days;
};

const getEventsForDay = (calendar: Day[], day: moment.Moment) => {
  if (!calendar) {
    return;
  }
  const result = calendar.find(_day =>
    moment(_day.date)
      .startOf("day")
      .isSame(day.clone().startOf("day"))
  );

  return result ? result.events : null;
};
