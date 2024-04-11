import { Kafila } from './Kafila';

export interface Dowar {
  id: number;
  nomDowars: string;
  nmbrResidant: number;
  arrivedKafilaCount: number;
  villeId: number;
  kafilas: Kafila[];
  deleted: boolean;
}
