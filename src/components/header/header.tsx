import React, { useState, useReducer, useRef, useEffect } from "react";
import styled from "styled-components";
import { Flex, Box, AlignItems, JustifyContent } from "../flexbox";
import Logo from "../logo/logo";
import { router } from "../../router";
import {
  Button,
  IconButton,
  Popper,
  Fade,
  Paper,
  RootRef,
  List,
  ListItem
} from "@material-ui/core";
import MenuIcon from "mdi-react/MenuIcon";
import { Dispatchable } from "../../index.d";
import ActionType from "../../store/actions";
import { connect } from "react-redux";
import PlusIcon from "mdi-react/PlusIcon";

const Contanier = styled(Flex)`
  background-color: ${props => props.theme.palette.gray.G4};
`;

const Menu = styled(MenuIcon)`
  color: ${props => props.theme.palette.gray.G0};
`;

const AddProjectIcon = styled(PlusIcon)`
  color: ${props => props.theme.palette.gray.G0};
`;

type HeaderProps = React.HTMLAttributes<HTMLDivElement> & Dispatchable;
const Header = (props: HeaderProps) => {
  const { dispatch } = props;
  const [showPopper, setVisibile] = useState(false);
  let addButtonRef = useRef(null);
  let popperRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <Contanier align={AlignItems.CENTER} height={4}>
      <Box paddingX={3}>
        <Button
          variant="text"
          onClick={() => dispatch({ type: ActionType.OPEN_SIDENAV })}
        >
          <Menu />
        </Button>
      </Box>
      <Box paddingX={3}>
        <Logo onClick={navigate} />
      </Box>
      {props.children}
      <Flex width="100%" paddingX={3} justify={JustifyContent.FLEX_END}>
        {getHeaderActions()}
        <Button variant="outlined" color="secondary" onClick={logout}>
          Logout
        </Button>
      </Flex>
    </Contanier>
  );

  function showPopperContent() {
    setVisibile(true);
  }

  function handleClickOutside(event: any) {
    if (
      popperRef.current &&
      !(popperRef.current as any).contains(event.target)
    ) {
      setVisibile(false);
    }
  }

  function getHeaderActions() {
    return (
      <Flex paddingX={4}>
        <span ref={addButtonRef}>
          <IconButton onClick={showPopperContent} title="New Project">
            <AddProjectIcon />
          </IconButton>
        </span>
        <RootRef rootRef={popperRef}>
          <Popper
            placement="bottom-end"
            open={showPopper}
            anchorEl={addButtonRef.current}
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>{getPopperContent()}</Paper>
              </Fade>
            )}
          </Popper>
        </RootRef>
      </Flex>
    );
  }
};

function navigate() {
  router.navigate("dashboard");
}

function logout() {
  localStorage.removeItem("me");
  document.cookie = "";
  router.navigate("login");
}

function getPopperContent() {
  return (
    <List>
      <ListItem button>Create Project</ListItem>
      <ListItem button>Create Team</ListItem>
    </List>
  );
}
export default connect()(Header);
