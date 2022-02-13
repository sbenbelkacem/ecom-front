import {Component, OnInit} from '@angular/core';
import {ProductService} from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  rows: any = [];
  columns: any = [];

  public totalElements: number;
  public pageNumber: number;
  public size: number;

  constructor(private productService: ProductService) {

  }

  id: number;
  price: number;
  name: string;
  description: string;
  hostName: string;

  ngOnInit(): void {

    this.initColumns();
    this.productService.getProducts().subscribe(data => {
      this.rows = data;
      this.totalElements = data.length;
      this.size = 10;
      this.pageNumber = 0;
    })
  }

  initColumns() {
    this.columns = [
      {prop: 'id', name: 'id'},
      {prop: 'name', name: 'Nom du Produit'},
      {prop: 'category', name: 'Description'},
      {prop: 'price', name: 'Prix'}
    ]
  }


}
