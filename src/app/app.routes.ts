import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { ProductDetail } from './components/product-detail/product-detail';
import { Cart } from './components/cart/cart';

export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'produto/:id', component: ProductDetail },
  { path: 'carrinho', component: Cart },
];