import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { MesasComponent } from './mesas/mesas.component';
import { AdminPedidosComponent } from './admin-pedidos/admin-pedidos.component';
import {OrdenComponent} from './orden/orden.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige a login por defecto
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'mesas', component: MesasComponent },
  { path: 'pedidos/:mesaId', component: AdminPedidosComponent },
  { path: 'orden', component: OrdenComponent },
  { path: '**', redirectTo: 'login' } // Ruta de fallback si la URL no coincide
];

