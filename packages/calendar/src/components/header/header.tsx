import React, { useState } from "react";
import { Flex, AlignItems, JustifyContent } from "@macrop/flexbox";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";
import Button from "@material-ui/core/Button";
import moment from "moment";

interface Props {
  onChange?: (date: Date) => void;
}

const Header = (props: Props) => {
  const [date, setDate] = useState(new Date());

  const left = (_event: React.MouseEvent) => {
    date.setMonth(date.getMonth() - 1);
    setDate(date);
  };

  const right = (_event: React.MouseEvent) => {
    date.setMonth(date.getMonth() + 1);
    setDate(date);
  };
  return (
    <Flex align={AlignItems.CENTER} paddingX={2}>
      <Button onClick={left}>
        <ChevronLeftIcon />
      </Button>
      <Flex width="100%" justify={JustifyContent.CENTER}>
        {date.getMonth()}
      </Flex>
      <Flex justify={JustifyContent.FLEX_END}>
        <Button onClick={right}>
          <ChevronRightIcon />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
