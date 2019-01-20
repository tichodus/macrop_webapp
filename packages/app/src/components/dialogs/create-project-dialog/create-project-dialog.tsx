import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Flex } from "../../flexbox/flex";
import { FlexDirection } from "../../flexbox/types";
import { Box } from "../../flexbox/box";
import { Dispatchable } from "../../../index.d";
import { connect } from "react-redux";
import { ActionType } from "../../../store/actions/index";

interface CreateProjectDialogProps extends Partial<Dispatchable> {
  open?: boolean;
}

const CreateProjectDialog = (props: CreateProjectDialogProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { open, dispatch } = props;

  return (
    <Dialog
      maxWidth="lg"
      open={open ? true : false}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle>Create Project</DialogTitle>
      <form onSubmit={submit()}>
        <DialogContent>
          <Flex width={700} direction={FlexDirection.COLUMN}>
            <Box marginY={2}>
              <TextField
                autoFocus
                onChange={handleTitle}
                label="Project name"
                fullWidth
                required
              />
            </Box>
            <Box marginY={2}>
              <TextField
                autoFocus
                id="name"
                rows={3}
                label="Project description"
                onChange={handleDescription}
                fullWidth
                multiline
              />
            </Box>
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
      type: ActionType.CLOSE_CREATE_PROJECT
    });
  }

  function handleTitle(event: any) {
    setName(event.target.value);
  }

  function handleDescription(event: any) {
    setDescription(event.target.value);
  }

  function submit() {
    return (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      dispatch!({
        type: ActionType.CREATE_PROJECT,
        payload: { name, description }
      });
      return false;
    };
  }
};

export default connect()(CreateProjectDialog);
