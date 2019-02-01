import { SessionActions } from "./session-actions";
import { ProgressBarActions } from "./progress-bar-actions";
import { SidenavActions } from "./sidenav-actions";
import { DialogActions } from "./dialog-actions";
import { ProjectActions } from "./project-actions";
import { CalendarActions } from "./calendar-actions";

export const ActionType = {
  ...SessionActions,
  ...ProgressBarActions,
  ...SidenavActions,
  ...DialogActions,
  ...ProjectActions,
  ...CalendarActions
};
