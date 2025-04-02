import { Component } from '@angular/core';
import { TablaComponent } from '../tabla/tabla.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-pedidos',
  imports: [TablaComponent],
  templateUrl: './admin-pedidos.component.html',
  styleUrl: './admin-pedidos.component.css'
})
export class AdminPedidosComponent {
  constructor(private router: Router) {}
  volver(): void {
    this.router.navigate(['/main']);
  }
}
