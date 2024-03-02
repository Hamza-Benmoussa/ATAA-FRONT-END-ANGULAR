import {Genre} from "./Genre";
import {RoleUser} from "./RoleUser";
export interface Utilisateur {
  id: number;
  nomComplete: string;
  password: string;
  address: string;
  tele: string;
  email: string;
  dateNaissance: Date;
  roleUser: RoleUser;
  genre: Genre;
  deleted: boolean;
}
