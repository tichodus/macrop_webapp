import React from "react";
import { FlexboxProps } from "./types";
import { Box } from "./box";

type FlexProps = Partial<FlexboxProps> & React.HTMLAttributes<HTMLDivElement>

export const Flex = (props: FlexProps) => {
  const { children, ...rest } = props;
  return (
    <Box flex {...rest}>
      {children}
    </Box>
  );
};
