const flex = (flex: boolean) => (flex ? "flex" : "block");
const wrap = (wrap: boolean) => (wrap ? "wrap" : "nowrap");
const auto = (auto: boolean) => auto && "flex:1 1 auto";
const column = (column: boolean) => (column ? "column" : "row");
const align = (align: string) => `align-items:${align}`;
const justify = (justify: string) => `justify-content:${justify}`;
const order = (order: string) => `order:${order}`;
