import { User, UserDTO } from "../../../models/user";

export interface Project {
  id: number;
  user_id: number;
  description: string;
  name: string;
  archived: null;
  owner: User;
  people: UserDTO[];
}
