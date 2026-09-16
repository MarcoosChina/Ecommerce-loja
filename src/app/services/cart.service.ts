import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSignal = signal<CartItem[]>(this.loadFromStorage());

  items = this.itemsSignal.asReadonly();

  total = computed(() =>
    this.itemsSignal().reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  );

  totalItems = computed(() =>
    this.itemsSignal().reduce((acc, item) => acc + item.quantity, 0)
  );

  add(product: Product) {
    const items = [...this.itemsSignal()];
    const existing = items.find(i => i.product.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      items.push({ product, quantity: 1 });
    }

    this.itemsSignal.set(items);
    this.saveToStorage(items);
  }

  remove(productId: number) {
    const items = this.itemsSignal().filter(i => i.product.id !== productId);
    this.itemsSignal.set(items);
    this.saveToStorage(items);
  }

  clear() {
    this.itemsSignal.set([]);
    localStorage.removeItem('carrinho');
  }

  private saveToStorage(items: CartItem[]) {
    localStorage.setItem('carrinho', JSON.stringify(items));
  }

  private loadFromStorage(): CartItem[] {
    const saved = localStorage.getItem('carrinho');
    return saved ? JSON.parse(saved) : [];
  }
}