import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/order/order.service';
import { OrderDTO } from '../../dto/orderDTO';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  orders: Array<OrderDTO> = [];

  constructor(private orderService: OrderService,
  private toastr: ToastrService) {}

  ngOnInit(): void {
    this.orderService.getGetOrderForVerification().subscribe(orders => {
      this.orders = orders;
    })
  }

  confirm(order: OrderDTO){
    this.orderService.confirm(order.id).subscribe(data => {
      order = data;
      this.toastr.success('order confirm error');
    }, () => {
      this.toastr.error('sucssess order confirm');
    });
  }

  reject(order: OrderDTO){
    this.orderService.reject(order.id).subscribe(data => {
      order = data;
      this.toastr.success('sucssess order reject');
    }, () => {
      this.toastr.error('order reject error');
    });
  }

}
