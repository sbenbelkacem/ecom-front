import { Component, OnInit } from '@angular/core';
import {OrderService} from 'src/app/core/services/order.service';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.scss']
})
export class OrderDashboardComponent implements OnInit {

  rows: any = [];
  columns: any = [];

  public totalElements: number;
  public pageNumber: number;
  public size: number;

  constructor(private orderService: OrderService) {

  }

  ngOnInit(): void {

    this.initColumns();
    this.orderService.getOrders().subscribe(data => {
      this.rows = data;
      this.totalElements = data.length;
      this.size = 10;
      this.pageNumber = 0;
    })
  }

  initColumns() {
    this.columns = [
      {prop: 'id', name: 'id'},
      {prop: 'productName', name: 'Nom du produit'},
      {prop: 'status', name: 'Status commande'},
      {prop: 'totalPrice', name: 'Prix total'},
      {prop: 'quantity', name: 'Quantité'}
    ]
  }


}
