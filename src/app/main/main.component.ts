import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private router: Router) { }
  goToMesas(): void {
    this.router.navigate(['/pedidos']);
  }
  goToAdministrar(): void {
    this.router.navigate(['/tabla']);
  }
}
