export enum EventType {
  MEETING = "meetings",
  TASK = "task",
  PARTY = "party"
}

export interface CalendarEvent {
  id: number;
  name: string;
  description?: string;
  start_time: string;
  end_time: string;
  type: EventType;
}
