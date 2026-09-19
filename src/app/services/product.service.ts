import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Estado privado — só o Service pode alterar a lista
  private productsSignal = signal<Product[]>([]);

  // Versão pública, somente leitura, pra outros componentes consumirem
  products = this.productsSignal.asReadonly();

  constructor(private http: HttpClient) {}

  loadProducts(): void {
    this.http.get<Product[]>('data/products.json').subscribe({
      next: (data) => this.productsSignal.set(data),
      error: (err) => console.error('Erro ao carregar produtos:', err)
    });
  }

  getById(id: number): Product | undefined {
    return this.productsSignal().find(p => p.id === id);
  }
}