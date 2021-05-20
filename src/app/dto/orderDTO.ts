import { CruiseDTO } from '../dto/cruiseDTO';

export class OrderDTO {
  id: number;
  userId: number;
  cruiseDto: CruiseDTO;
  status: string;
}
