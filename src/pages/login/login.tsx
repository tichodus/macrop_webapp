import React, { useState, useEffect } from "react";
import {
  Flex,
  AlignItems,
  JustifyContent,
  FlexDirection,
  Box
} from "../../components/flexbox";
import { Action } from "../../store/actions";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { transparentize } from "polished";
import { Link } from "react-router5";
import { router } from "../../router";

const Container = styled(Flex)`
  background-image: url("assets/login-page.jpg");
`;

const LoginContainer = styled(Flex)`
  background: ${transparentize(0.2, "#ffffff")};
`;

interface LoginProps {
  dispatch: (action: Action) => void;
}

let Login = (props: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const me = localStorage.getItem("me");
    if (me) {
      router.navigate("dashboard");
    }
  }, []);

  const { dispatch } = props;
  return (
    <Container
      align={AlignItems.CENTER}
      justify={JustifyContent.CENTER}
      width="100vw"
      height="100vh"
    >
      <LoginContainer
        width={1 / 4}
        padding={4}
        direction={FlexDirection.COLUMN}
      >
        <Box marginY={1}>
          <TextField
            fullWidth
            value={username}
            onChange={onUsernameChange}
            placeholder="Username..."
            variant="outlined"
          />
        </Box>
        <Box marginY={1}>
          <TextField
            fullWidth
            type="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="Password..."
            variant="outlined"
          />
        </Box>
        <Box width="100%" marginY={1}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={login(username, password)(dispatch)}
          >
            Login
          </Button>
        </Box>
        <Flex
          justify={JustifyContent.CENTER}
          align={AlignItems.CENTER}
          width="100%"
          marginY={1}
        >
          <Link routeName="register">Not a member? Register here</Link>
        </Flex>
      </LoginContainer>
    </Container>
  );

  function onUsernameChange(event: any) {
    setUsername(event.target.value);
  }

  function onPasswordChange(event: any) {
    setPassword(event.target.value);
  }
};

function login(username: string, password: string) {
  return (dispatch: any) => () => {
    dispatch({
      type: "login",
      payload: { username, password }
    });
  };
}

export default connect()(Login);
