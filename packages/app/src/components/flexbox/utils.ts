import { spacing } from "./spacing";
import {
  Display,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  AlignItems,
  AlignSelf,
  AlignContent,
  FlexboxProps,
  MarginProps,
  Positions,
  PaddingProps
} from "./types";

const isNumber = (value: number | string) => typeof value === "number";
const pixels = (value: number) => {
  return `${value}px`;
};
const percents = (value: number) => {
  return `${value * 100}%`;
};

const applySpacing = (value: number) => {
  return value < spacing.length;
};

const formatter = (value: number | string): string => {
  if (isNumber(value)) {
    return formatAsNumber(value as number);
  }
  return value as string;
};

const formatAsNumber = (value: number): string => {
  if (0 < value && value < 1) {
    return percents(value);
  }

  if (applySpacing(value)) {
    return pixels(spacing[value]);
  }

  return pixels(value);
};

export const display = (flex?: boolean) => {
  return `display: ${flex ? Display.FLEX : Display.BLOCK}`;
};

export const flexDirection = (direction?: FlexDirection) => {
  if (direction) {
    return `flex-direction:${direction}`;
  }
};

export const flexWrap = (value?: FlexWrap) => {
  if (value) {
    return `flex-wrap:${value}`;
  }
};

export const justifyContent = (value?: JustifyContent) => {
  if (value) {
    return `justify-content:${value}`;
  }
};

export const alignItems = (value?: AlignItems) => {
  if (value) {
    return `align-items:${value}`;
  }
};

export const alignSelf = (value?: AlignSelf) => {
  if (value) {
    return `align-self:${value}`;
  }
};

export const alignContent = (value?: AlignContent) => {
  if (value) {
    return `align-content:${value}`;
  }
};

export const padding = <T extends PaddingProps = FlexboxProps>(props: T) => {
  const {
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingX,
    paddingY
  } = props;

  /**
   * INDEXES: 0 - TOP, 1 - RIGHT, 2 - BOTTOM, 3 - LEFT
   */
  let values: string[] = ["0px", "0px", "0px", "0px"];
  if (padding) {
    const value = formatter(padding);
    values = [value, value, value, value];
  }

  if (paddingBottom) {
    const value = formatter(paddingBottom);
    values[Positions.BOTTOM] = value;
  }

  if (paddingLeft) {
    const value = formatter(paddingLeft);
    values[Positions.LEFT] = value;
  }
  if (paddingRight) {
    const value = formatter(paddingRight);
    values[Positions.RIGHT] = value;
  }
  if (paddingTop) {
    const value = formatter(paddingTop);
    values[Positions.TOP] = value;
  }
  if (paddingX) {
    const value = formatter(paddingX);
    values[Positions.LEFT] = value;
    values[Positions.RIGHT] = value;
  }
  if (paddingY) {
    const value = formatter(paddingY);
    values[Positions.TOP] = value;
    values[Positions.BOTTOM] = value;
  }

  return `padding:${values.join(" ")}`;
};

export const margin = <T extends MarginProps = FlexboxProps>(props: T) => {
  const {
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    marginX,
    marginY
  } = props;

  /**
   * INDEXES: 0 - TOP, 1 - RIGHT, 2 - BOTTOM, 3 - LEFT
   */
  let values: string[] = ["0px", "0px", "0px", "0px"];
  if (margin) {
    const value = formatter(margin);
    values = [value, value, value, value];
  }

  if (marginBottom) {
    const value = formatter(marginBottom);
    values[Positions.BOTTOM] = value;
  }

  if (marginLeft) {
    const value = formatter(marginLeft);
    values[Positions.LEFT] = value;
  }
  if (marginRight) {
    const value = formatter(marginRight);
    values[Positions.RIGHT] = value;
  }
  if (marginTop) {
    const value = formatter(marginTop);
    values[Positions.TOP] = value;
  }
  if (marginX) {
    const value = formatter(marginX);
    values[Positions.LEFT] = value;
    values[Positions.RIGHT] = value;
  }
  if (marginY) {
    const value = formatter(marginY);
    values[Positions.TOP] = value;
    values[Positions.BOTTOM] = value;
  }

  return `margin:${values.join(" ")}`;
};

export const width = (value?: string | number) => {
  if (value) {
    return `width:${formatter(value)}`;
  }
};

export const height = (value?: string | number) => {
  if (value) {
    return `height:${formatter(value)}`;
  }
};
