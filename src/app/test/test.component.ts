import { Component, OnInit } from '@angular/core';
import { ShipTestService } from '../shared/shipTest.service';
import { ShipModel } from '../shared/ship-model';

@Component({
  selector: 'app-home',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  ships$: Array<ShipModel> = [];

  constructor(private shipTestService: ShipTestService) {
    this.shipTestService.getAllShips().subscribe(ship => {
      this.ships$ = ship;
    })
  }

  ngOnInit(): void {
  }

}
