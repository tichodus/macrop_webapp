import React from "react";
import styled from "styled-components";
import {
  display,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignSelf,
  alignContent,
  padding,
  margin,
  width,
  height
} from "./utils";
import { FlexboxProps, PaddingProps, MarginProps } from "./index.d";

const BoxContainer = styled.div<Partial<FlexboxProps>>`
  ${props => display(props.flex)};
  ${props => flexDirection(props.direction)};
  ${props => flexWrap(props.wrap)};
  ${props => justifyContent(props.justify)};
  ${props => alignItems(props.align)};
  ${props => alignSelf(props.self)};
  ${props => alignContent(props.content)};
  ${props => padding(props as PaddingProps)};
  ${props => margin(props as MarginProps)};
  ${props => width(props.width)}
  ${props => height(props.height)}
`;

type BoxProps = Partial<FlexboxProps> & { children?: React.ReactChild };

export const Box = (props: BoxProps) => {
  const { children, ...rest } = props;
  return <BoxContainer {...rest}>{children}</BoxContainer>;
};
