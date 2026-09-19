import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ProductList } from './components/product-list/product-list'; // adicione

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, ProductList], // adicione ProductList aqui
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'ecommerce-loja';
}