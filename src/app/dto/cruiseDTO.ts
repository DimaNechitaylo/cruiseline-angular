export class CruiseDTO {
  id: number;
  name: string;
  shipId: number;
  passengersCount: number;
  availableCount: number;
  start: Array<String>;
  finish: Array<String>;
  portsId: Array<number>;
}
