import React from "react";
import moment from "moment";
import { Flex, JustifyContent } from "../../../../app/src/components/flexbox";
import styled from "styled-components";

const TEXT_COLOR = "#777";

const Cell = styled(Flex)`
  color: ${TEXT_COLOR};
  border-top: 1px solid ${TEXT_COLOR};
  border-bottom: 1px solid ${TEXT_COLOR};
`;

export const Weekdays = () => {
  const dateFormat = "dddd";
  const days = [];
  let startDate = moment().startOf("week");
  for (let i = 0; i < 7; i++) {
    days.push(
      <Cell paddingY={2} width={1 / 7} justify={JustifyContent.CENTER} key={i}>
        {startDate.add(1, "day").format(dateFormat)}
      </Cell>
    );
  }
  return <Flex>{days}</Flex>;
};
