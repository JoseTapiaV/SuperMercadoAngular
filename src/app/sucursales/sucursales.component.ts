import { Component, OnInit } from '@angular/core';
import { SucursalService } from './sucursal.service';
import { Sucursal } from './sucursal';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html'
})
export class SucursalesComponent implements OnInit {

  sucursales: Sucursal[];

  constructor(private sucursalService: SucursalService) { }

  ngOnInit(): void {
    this.sucursalService.getSucursales().subscribe(
      sucursales => this.sucursales = sucursales
    );
  }

}
