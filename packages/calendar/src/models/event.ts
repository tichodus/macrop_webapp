export enum EventType {
  MEETING = "meeting",
  TASK = "task",
  PARTY = "party"
}

export interface CalendarEvent {
  id: number;
  name: string;
  description?: string;
  start_time: Date;
  end_time: Date;
  type: EventType;
}
