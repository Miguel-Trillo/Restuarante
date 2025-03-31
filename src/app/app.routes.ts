import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { MesasComponent } from './mesas/mesas.component';
import { AdminPedidosComponent } from './admin-pedidos/admin-pedidos.component';

export const routes: Routes = [
    { path: '', component: AdminPedidosComponent },
];
