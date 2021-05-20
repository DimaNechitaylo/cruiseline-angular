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

  orders: Array<OrderDTO> = [];

  constructor(private orderService: OrderService,
  private cruiseService: CruiseService) { }

  ngOnInit(): void {
    this.orderService.getUserOrders().subscribe(orders => {
      this.orders = orders;
    })
  }

}
