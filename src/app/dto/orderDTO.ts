import { CruiseDTO } from '../dto/cruiseDTO';

export class OrderDTO {
  id: number;
  userId: number;
  cruise: CruiseDTO;
  status: string;
}
