import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Mesa {
  id: number;
  nombre: string;
  disponible: boolean;
}

@Component({
  selector: 'app-mesas',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './mesas.component.html',
  styleUrl: './mesas.component.css'
})
export class MesasComponent {
  mesas: Mesa[] = [
    { id: 1, nombre: 'M1', disponible: true },
    { id: 2, nombre: 'M2', disponible: true },
    { id: 3, nombre: 'M3', disponible: true },
    { id: 4, nombre: 'M4', disponible: true },
    { id: 5, nombre: 'M5', disponible: true },
    { id: 6, nombre: 'M6', disponible: true },
    { id: 7, nombre: 'M7', disponible: true },
    { id: 8, nombre: 'M8', disponible: true },
    { id: 9, nombre: 'M9', disponible: true },
    { id: 10, nombre: 'M10', disponible: true }
  ];
  fechaActual: string = 'Haga click para fijar la fecha';
  fechaFijada: boolean = false;
  mesaSeleccionada: number | null = null;
  constructor(private router: Router) {}
  seleccionarMesa(id: number): void {
    this.mesaSeleccionada = id;
    console.log('Mesa seleccionada:', id);
  }

  volver(): void {
    this.router.navigate(['/prueba1']);
  }

  continuar(): void {
    if (this.mesaSeleccionada && this.fechaFijada) {
      console.log('Continuando con la mesa:', this.mesaSeleccionada);
      this.router.navigate(['/prueba1', this.mesaSeleccionada], { queryParams: { fecha: this.fechaActual } });
    } else {
      console.log('Debe seleccionar una mesa y fijar la fecha.');
    }
  }

  cambiarFecha(): void {
    const fecha = new Date();
    const opciones: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    this.fechaActual = fecha.toLocaleString('es-ES', opciones);
    this.fechaFijada = true;
    console.log('Fecha actualizada:', this.fechaActual);
  }
}