import { BienKafila } from './BienKafila';

export interface Kafila {
  id?: number;
  nomKfila: string;
  dateDepart: Date;
  dateArrivee: Date;
  dowarId?: number;
  associationId?: number;
  bienKafilaDtos: BienKafila[];
  arrivedKafila: boolean;
  deleted: boolean;
}
