import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Button
} from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router5";
import { Dispatchable, Dispatch } from "../../index.d";
import { ActionType } from "../../store/actions";
import { Box, Flex, JustifyContent } from "../flexbox";
import ChevronLeftIcon from "mdi-react/ChevronLeftIcon";
import Logo from "../logo/logo";

interface SidenavItem {
  icon?: JSX.Element;
  text: string;
  navigateTo: string;
}
interface SidenavProps extends Dispatchable {
  list: SidenavItem[];
  opened?: boolean;
}

const Sidenav = (props: SidenavProps) => {
  const { opened, dispatch } = props;
  const { list } = props;

  const sideList = getSideList(list, dispatch);
  return (
    <Drawer open={opened} onClose={close(dispatch)}>
      <div
        tabIndex={0}
        role="button"
        onClick={close(dispatch)}
        onKeyDown={close(dispatch)}
      >
        {sideList}
      </div>
    </Drawer>
  );
};

function getSideList(list: SidenavItem[], dispatch: Dispatch) {
  return (
    <Box width={250}>
      <Flex height={4}>
        <Flex paddingX={3} justify={JustifyContent.FLEX_START}>
          <Logo />
        </Flex>
        <Flex width="100%" justify={JustifyContent.FLEX_END}>
          <Button variant="text" onClick={close(dispatch)}>
            <ChevronLeftIcon />
          </Button>
        </Flex>
      </Flex>
      <Divider />
      <List>
        {list.map((item, index) => (
          <Link key={index} routeName={item.navigateTo}>
            <ListItem button key={index}>
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
}

const close = (dispatch: Dispatch) => () => {
  dispatch({
    type: ActionType.CLOSE_SIDENAV
  });
};

export default connect((state: any) => {
  return { opened: state.sidenavReducer.sidenavOpened };
})(Sidenav);
