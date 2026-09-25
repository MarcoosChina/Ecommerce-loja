import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  private productId = signal<number>(0);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.productId.set(Number(this.route.snapshot.paramMap.get('id')));

    // Garante que os produtos estão carregados, caso a pessoa acesse a URL direto
    if (this.productService.products().length === 0) {
      this.productService.loadProducts();
    }
  }

  product = computed(() => this.productService.getById(this.productId()));

  addToCart(): void {
    const p = this.product();
    if (p) this.cartService.add(p);
  }

  voltar(): void {
    this.router.navigate(['/']);
  }
}