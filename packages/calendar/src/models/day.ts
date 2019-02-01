import { CalendarEvent } from "./event";

export interface Day {
  day: Date;
  events: CalendarEvent[];
}
