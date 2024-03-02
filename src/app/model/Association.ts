import { Member } from './Member';
import { BiensEssantiel } from './BiensEssentiel';

export interface Association {
  id: number;
  nomPresidantId: number;
  nbrSerie: string;
  nomAssociation: string;
  members: Member[];
  biensEssantiels: BiensEssantiel[];
  villeId: number;
}
