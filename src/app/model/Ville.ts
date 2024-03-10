import { Dowar } from './Dowar';
import { Association } from './Association';

export interface Ville {
  id: number;
  nomVille: string;
  dowars: Dowar[];
  associations: Association[];
  deleted: boolean;
}
