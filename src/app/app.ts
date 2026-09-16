import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header], // os dois precisam estar aqui
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'ecommerce-loja';
}