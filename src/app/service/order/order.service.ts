import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderDTO } from '../../dto/orderDTO';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  requestAnOrder(cruiseId: number): Observable<string>{
    return this.http.get("http://localhost:8080/order/submit/" + cruiseId, { responseType: 'text' })
  }

  getOrderByCruiseId(cruiseId: number): Observable<OrderDTO>{
    return this.http.get<OrderDTO>("http://localhost:8080/order/" + cruiseId)
  }

  getUserOrders(): Observable<Array<OrderDTO>>{
    return this.http.get<Array<OrderDTO>>("http://localhost:8080/order/getUserOrders")
  }

  getGetOrderForVerification(): Observable<Array<OrderDTO>>{
    return this.http.get<Array<OrderDTO>>("http://localhost:8080/order/admin/getGetOrderForVerification")
  }

  pay(cruiseId: number): Observable<OrderDTO>{
    return this.http.get<OrderDTO>("http://localhost:8080/order/pay/" + cruiseId)
  }

  cancel(cruiseId: number): Observable<OrderDTO>{
    return this.http.get<OrderDTO>("http://localhost:8080/order/cancel/" + cruiseId)
  }

  confirm(cruiseId: number): Observable<OrderDTO>{
    return this.http.get<OrderDTO>("http://localhost:8080/order/admin/confirm/" + cruiseId)
  }

  reject(cruiseId: number): Observable<OrderDTO>{
    return this.http.get<OrderDTO>("http://localhost:8080/order/admin/reject/" + cruiseId)
  }

}
