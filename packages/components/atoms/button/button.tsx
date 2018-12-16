import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => props.theme.palette.primary.main};
`;

export class Button extends React.Component<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> {
  render() {
    const { children, ...rest } = this.props;
    return <StyledButton {...rest}>{children}</StyledButton>;
  }
}
