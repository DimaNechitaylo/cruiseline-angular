import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CruiseService } from '../../service/cruise/cruise.service';
import { OrderService } from '../../service/order/order.service';
import { CruiseDTO } from '../../dto/cruiseDTO';
import { OrderDTO } from '../../dto/orderDTO';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-view-cruise',
  templateUrl: './view-cruise.component.html',
  styleUrls: ['./view-cruise.component.css']
})
export class ViewCruiseComponent implements OnInit {

  cruiseId: number;
  cruise: CruiseDTO;
  order: OrderDTO;

  constructor(private activateRoute: ActivatedRoute,
    private cruiseService: CruiseService,
    private orderService: OrderService,
    private toastr: ToastrService) {
    this.cruiseId = this.activateRoute.snapshot.params.id;
}

  ngOnInit(): void {
    this.getCruiseById();
    this.getOrderByCruiseId();
  }

  private getCruiseById() {
    this.cruiseService.getCruiseById(this.cruiseId).subscribe(cruise => {
      this.cruise = cruise;
    }, error =>{
      throwError(error);
    })
  }

  private getOrderByCruiseId() {
    this.orderService.getOrderByCruiseId(this.cruiseId).subscribe(order => {
      this.order = order;
    }, error =>{
      throwError(error);
    })
  }

  requestAnOrder(){
    this.orderService.requestAnOrder(this.cruiseId).subscribe(data => {
      this.toastr.success(data);
    }, () => {
      this.toastr.error('Request an order error');
    });
  }

  pay(){
    this.orderService.pay(this.order.id).subscribe(data => {
      this.toastr.success(data);
    }, () => {
      this.toastr.error('order payment error');
    });
  }

  cancel(){
    this.orderService.cancel(this.order.id).subscribe(data => {
      this.toastr.success(data);
    }, () => {
      this.toastr.error('order cancel error');
    });
  }

}
