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
import DatePicker from "react-date-picker";
import Select from "@material-ui/core/Select";

import moment from "moment";
import { MenuItem } from "@material-ui/core";

interface AddNewEventDialogProps extends Partial<Dispatchable> {
  open?: boolean;
  date?: string;
  activeProject?: number;
}

const AddNewEventDialog = (props: AddNewEventDialogProps) => {
  const { open, dispatch, activeProject, date } = props;
  const [name, setName] = useState("");
  const [description, setDescrition] = useState("");
  const [endDate, setEndDate] = useState(moment(date));
  const [eventType, setEventType] = useState(0);

  if (!date || typeof activeProject === "undefined") {
    return null;
  }

  return (
    <Dialog
      maxWidth="lg"
      open={open ? true : false}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle>Add New Event</DialogTitle>
      <form onSubmit={submit()}>
        <DialogContent>
          <Flex width={700} direction={FlexDirection.COLUMN}>
            <Box marginY={2}>
              <TextField
                autoFocus
                onChange={event => setName(event.target.value)}
                value={name}
                label="Event name"
                fullWidth
                required
              />
            </Box>
            <Box marginY={2}>
              <TextField
                autoFocus
                onChange={event => setDescrition(event.target.value)}
                value={description}
                label="Event description"
                fullWidth
                required
              />
            </Box>

            <Box marginY={2}>
              <DatePicker
                onChange={date =>
                  setEndDate(moment(Array.isArray(date) ? date[0] : date))
                }
                value={endDate.toDate()}
                minDate={moment(date).toDate()}
              />
            </Box>

            <Box marginY={2}>
              <Select
                value={eventType}
                onChange={event => setEventType(event.target.value)}
                inputProps={{
                  name: "age",
                  id: "age-simple"
                }}
                fullWidth
              >
                <MenuItem value={0}>Party</MenuItem>
                <MenuItem value={1}>Meeting</MenuItem>
                <MenuItem value={2}>Task</MenuItem>
              </Select>
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
      type: ActionType.CLOSE_ADD_NEW_EVENT
    });
  }

  function submit() {
    return (e: any) => {
      e.preventDefault();
      e.stopPropagation();

      if (eventType == 2) {
        dispatch!({
          type: ActionType.CREATE_TASK,
          payload: {
            projectId: activeProject,
            name,
            start_date: moment(date).format("MM/DD/YYYY h:mm:ss"),
            end_date: moment(endDate).format("MM/DD/YYYY h:mm:ss")
          }
        });
      } else {
        dispatch!({
          type: ActionType.CREATE_EVENT,
          payload: {
            name,
            description,
            start_time: moment(date).format("MM/DD/YYYY h:mm:ss"),
            end_time: moment(endDate).format("MM/DD/YYYY h:mm:ss"),
            type: eventType === 0 ? "party" : "meetings"
          }
        });
      }
    };
  }
};

export default connect()(AddNewEventDialog);
