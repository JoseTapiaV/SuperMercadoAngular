import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { PedidoService } from './../pedidos/pedidos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './producto.component.html'
})
export class ProductoComponent implements OnInit {

  productos: Producto[];

  constructor(private productoService: ProductoService, private pedidoService: PedidoService) { }

  ngOnInit() {
    this.productoService.getProductos().subscribe(
      productos => this.productos = productos
    );
  }

  crearPedido(producto: number, cantidad: number) {
    console.log(producto)
    this.pedidoService.crearPedido(producto, cantidad).subscribe(
      (data) => {
        Swal.fire('Pedido Creado', 'Se ha creado el pedido','success')
      }, 
      (error) => {
        Swal.fire('Error', 'No se pudo generar el pedido', 'error')
      }
    );
  }
}