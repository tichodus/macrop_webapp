import { CalendarEvent } from "./event";

export interface Day {
  date: string;
  events: CalendarEvent[];
}
