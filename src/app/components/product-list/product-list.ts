import { Component, OnInit, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  searchTerm = signal('');
  selectedCategory = signal('todas');
  sortOrder = signal<'' | 'asc' | 'desc'>('');

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.loadProducts();
  }

  // Gera a lista de categorias dinamicamente a partir dos produtos carregados
  categories = computed(() => {
    const cats = this.productService.products().map(p => p.category);
    return ['todas', ...new Set(cats)];
  });

  // Aplica busca + filtro + ordenação, nessa ordem, sobre a lista original
  filteredProducts = computed(() => {
    let result = this.productService.products();

    if (this.searchTerm().trim()) {
      const term = this.searchTerm().toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(term));
    }

    if (this.selectedCategory() !== 'todas') {
      result = result.filter(p => p.category === this.selectedCategory());
    }

    if (this.sortOrder() === 'asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (this.sortOrder() === 'desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  });
}