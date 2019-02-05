import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Flex } from "../../flexbox/flex";
import { FlexDirection, FlexWrap } from "../../flexbox/types";
import { Box } from "../../flexbox/box";
import { Dispatchable } from "../../../index.d";
import { connect } from "react-redux";
import { ActionType } from "../../../store/actions/index";
import { UserDTO } from "../../../models/user";
import { Avatar, IconButton } from "@material-ui/core";

import SearchIcon from "mdi-react/SearchIcon";

interface AddPeopleOnProjectDialogProps extends Partial<Dispatchable> {
  open?: boolean;
  users?: UserDTO[];
  activeProject?: number;
}

const AddPeopleOnProjectDialog = (props: AddPeopleOnProjectDialogProps) => {
  const [email, setEmail] = useState("");

  const { open, dispatch, users, activeProject } = props;

  useEffect(() => {
    console.log(users);
  });
  return (
    <Dialog
      maxWidth="lg"
      open={open ? true : false}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle>Add People On Project</DialogTitle>
      <form onSubmit={submit()}>
        <DialogContent>
          <Flex width={700} direction={FlexDirection.COLUMN}>
            <Box marginY={2}>
              <TextField
                autoFocus
                onChange={handleEmail}
                value={email}
                label="User mail"
                fullWidth
                required
              />
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </Box>
            {users && (
              <Flex width={700} wrap={FlexWrap.WRAP}>
                {users.map(user => (
                  <Avatar
                    src={user.image}
                    title={`${user.first_name} ${user.last_name}`}
                  >
                    {getLetters(user)}
                  </Avatar>
                ))}
              </Flex>
            )}
          </Flex>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );

  function handleClose() {
    dispatch!({
      type: ActionType.CLOSE_ADD_PEOPLE_ON_PROJECT
    });
  }

  function handleEmail(event: any) {
    setEmail(event.target.value);
  }

  function getLetters(user: UserDTO) {
    return `${user.first_name} ${user.last_name}`
      .split(" ")
      .map(word => (word[0] ? word[0] : ""))
      .join("");
  }

  function handleSearch() {
    dispatch!({
      type: ActionType.FILTER_USERS_RESULT,
      payload: {
        email,
        page_size: 10
      }
    });
  }

  function submit() {
    if (!users) {
      return;
    }
    return (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      dispatch!({
        type: ActionType.ADD_USERS_ON_PROJECT,
        payload: { userId: users[0].id, projectId: activeProject }
      });
      return false;
    };
  }
};

export default connect((state: any) => {
  return {
    users: state.usersReducer.filterUsersResult
  };
})(AddPeopleOnProjectDialog);
