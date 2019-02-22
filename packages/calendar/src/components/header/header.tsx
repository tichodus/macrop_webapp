import React from "react";
import { Flex, AlignItems, JustifyContent } from "@macrop/flexbox";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import ChevronRightIcon from "mdi-react/ChevronRightIcon";
import Button from "@material-ui/core/Button";
import moment from "moment";

interface Props {
  onChange?: (date: moment.Moment) => void;
  date: moment.Moment;
}

const Header = (props: Props) => {
  const { onChange, date } = props;

  const left = (_event: React.MouseEvent) => {
    const result = moment(date).add(-1, "month");
    onChange && onChange(result);
  };

  const right = (_event: React.MouseEvent) => {
    const result = moment(date).add(1, "month");
    onChange && onChange(result);
  };

  const getDate = (date: moment.Moment) => {
    return date.format("MMMM YYYY");
  };

  return (
    <Flex padding={2} align={AlignItems.CENTER} paddingX={2}>
      <Button onClick={left}>
        <ChevronLeftIcon />
      </Button>
      <Flex width="100%" justify={JustifyContent.CENTER}>
        <span>
          <b>{getDate(date).toUpperCase()}</b>
        </span>
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
