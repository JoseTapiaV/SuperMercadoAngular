import { Component, OnInit } from '@angular/core';
import { PedidoService } from './pedidos.service';
import { Pedidos } from './pedidos';
import swal from 'sweetalert2';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html'
})
export class PedidosComponent implements OnInit {

 pedidos: Pedidos[];
  
  constructor(private pedidoService: PedidoService) { }

  ngOnInit(){
    this.pedidoService.getPedidos().subscribe(
      pedidos => this.pedidos = pedidos
    );
  }

  cancelar(codigo:any): void {
    swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro que desea Quitar al producto ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Quitar!'
    }).then((result) => {
      if (result.isConfirmed) {
      for(let i=0;i<this.pedidos.length;i++){
        if(this.pedidos[i].idPedido == codigo){
          this.pedidos.splice(i,1);
        }
      }
        this.pedidoService.delete(codigo).subscribe(
          response => {
            
            swal.fire(
             'Pedido Quitado!',
              `Pedido Quitado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }
 
}



