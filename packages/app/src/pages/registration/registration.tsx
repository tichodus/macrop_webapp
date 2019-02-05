import React, { useState } from "react";
import {
  AlignItems,
  JustifyContent,
  FlexDirection,
  Box,
  Flex
} from "../../components/flexbox";
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import { Link } from "react-router5";
import styled from "styled-components";
import { transparentize } from "polished";
import { Dispatchable } from "../../index.d";
import { ActionType } from "../../store/actions";
import { connect } from "react-redux";

const Container = styled(Flex)`
  background-image: url("assets/register-page.jpg");
  background-size: cover;
  background-position: center;
`;

const RegisterContainer = styled(Flex)`
  background: ${transparentize(0.2, "#ffffff")};
`;

enum Gender {
  MALE = "M",
  FEMALE = "F"
}

let Registration = (props: Dispatchable) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(Gender.MALE);
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [passwodMatch, setPasswordMatch] = useState(true);
  const { dispatch } = props;

  return (
    <Container
      align={AlignItems.CENTER}
      justify={JustifyContent.CENTER}
      width="100vw"
      height="100vh"
    >
      <RegisterContainer
        width={1 / 4}
        padding={4}
        direction={FlexDirection.COLUMN}
      >
        <form
          onSubmit={register({
            firstName,
            lastName,
            email,
            gender,
            password,
            repeatedPassword
          })}
        >
          <Box marginY={1}>
            <TextField
              fullWidth
              value={firstName}
              onChange={onFirstNameChange}
              placeholder="First name..."
              variant="outlined"
              required
            />
          </Box>
          <Box marginY={1}>
            <TextField
              fullWidth
              value={lastName}
              onChange={onLastNameChange}
              placeholder="Last name..."
              variant="outlined"
              required
            />
          </Box>
          <Box marginY={1}>
            <TextField
              fullWidth
              value={email}
              onChange={onEmailChange}
              placeholder="Email..."
              variant="outlined"
              required
            />
          </Box>
          <Box marginY={1}>
            <RadioGroup
              aria-label="Gender"
              name="gender1"
              value={gender}
              onChange={onGenderChange}
            >
              <FormControlLabel
                value={Gender.MALE}
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                value={Gender.FEMALE}
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </Box>
          <Box marginY={1}>
            <TextField
              fullWidth
              type="password"
              value={password}
              onChange={onPasswordChange}
              placeholder="Password..."
              variant="outlined"
              required
            />
          </Box>
          <Box marginY={1}>
            <TextField
              type="password"
              fullWidth
              value={repeatedPassword}
              onChange={onRepeatedPasswordChange}
              placeholder="Repeat password..."
              variant="outlined"
              required
            />
          </Box>
          <Box width="100%" marginY={1}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Register
            </Button>
          </Box>
          <Flex
            justify={JustifyContent.CENTER}
            align={AlignItems.CENTER}
            width="100%"
            marginY={1}
          >
            <Link routeName="login">Go back to login page</Link>
          </Flex>
        </form>
      </RegisterContainer>
    </Container>
  );

  function onFirstNameChange(event: any) {
    setFirstName(event.target.value);
  }

  function onLastNameChange(event: any) {
    setLastName(event.target.value);
  }

  function onEmailChange(event: any) {
    setEmail(event.target.value);
  }

  function onGenderChange(event: any) {
    setGender(event.target.value);
  }

  function onPasswordChange(event: any) {
    setPassword(event.target.value);
  }

  function onRepeatedPasswordChange(event: any) {
    setRepeatedPassword(event.target.value);
  }

  function register(formValues: {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    password: string;
    repeatedPassword: string;
  }) {
    return (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      if (password !== repeatedPassword) {
        setPasswordMatch(false);
        return;
      }

      const user = {
        first_name: firstName,
        last_name: lastName,
        email,
        gender,
        password
      };

      dispatch({
        type: ActionType.REGISTER,
        payload: user
      });
      return false;
    };
  }
};

export default connect()(Registration);
