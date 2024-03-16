import { RoleMembers } from './RoleMembers';
import {Genre} from "./Genre";


export interface Member {
  id: number;
  roleMembers: RoleMembers;
  nomMembres: string;
  dateNaissance: Date;
  genre: Genre;
  email: string;
  tele: string;
  address: string;
  associationId: number;
  deleted: boolean;
}
