import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Location } from '@angular/common';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  imagen: string;
}

@Component({
  selector: 'app-orden',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent {
  categoriaActual: string = 'Platos Principales';

  productos: Producto[] = [
    { id: 1, nombre: 'Lomo', precio: 45, categoria: 'Platos Principales', imagen: 'assets/lomo.jpg' },
    { id: 2, nombre: 'Ceviche', precio: 35, categoria: 'Entradas', imagen: 'assets/ceviche.jpg' },
    { id: 3, nombre: 'Pastel', precio: 20, categoria: 'Postres', imagen: 'assets/pastel.jpg' },
    // Añade más productos aquí
  ];

  categorias: string[] = ['Extras', 'Entradas', 'Platos Principales', 'Postres', 'Bebidas'];

  cambiarCategoria(categoria: string): void {
    this.categoriaActual = categoria;
  }

  get productosFiltrados(): Producto[] {
    return this.productos.filter(producto => producto.categoria === this.categoriaActual);
  }

  cantidades: {[id: number]: number} = {};

  incrementar(id: number): void {
    if (!this.cantidades[id]) {
      this.cantidades[id] = 0;
    }
    this.cantidades[id]++;
  }

  decrementar(id: number): void {
    if (!this.cantidades[id]) {
      this.cantidades[id] = 0;
    }
    if (this.cantidades[id] > 0) {
      this.cantidades[id]--;
    }
  }

  getCantidad(id: number): number {
    return this.cantidades[id] || 1;
  }

  anadirAlCarrito(producto: Producto): void {
    console.log(`Añadido ${this.getCantidad(producto.id)} de ${producto.nombre} al carrito`);
    // Implementa la lógica para añadir al carrito
  }



  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
