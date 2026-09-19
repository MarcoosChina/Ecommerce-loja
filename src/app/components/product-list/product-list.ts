import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductCard } from '../product-card/product-card'; // novo import

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard], // adicionar aqui
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.loadProducts();
  }
}