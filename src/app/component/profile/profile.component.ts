import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/order/order.service';
import { CruiseService } from '../../service/cruise/cruise.service';
import { OrderDTO } from '../../dto/orderDTO';
import { CruiseDTO } from '../../dto/cruiseDTO';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  cruises: Array<CruiseDTO> = [];

  constructor(private orderService: OrderService,
  private cruiseService: CruiseService) {
    this.cruiseService.getUserCruises().subscribe(cruises => {
      this.cruises = cruises;
    })
  }

  ngOnInit(): void {
  }

}
