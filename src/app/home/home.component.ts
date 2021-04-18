import { Component, OnInit } from '@angular/core';
import { ShipService } from '../shared/ship.service';
import { ShipModel } from '../shared/ship-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ships$: Array<ShipModel> = [];

  constructor(private shipService: ShipService) {
    this.shipService.getAllShips().subscribe(ship => {
      this.ships$ = ship;
    })
  }

  ngOnInit(): void {
  }

}
