import { Component, OnInit } from '@angular/core';
import { PagoTarjeta } from './tarjeta';
import { TarjetaService } from './tarjeta.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent implements OnInit {

  tarjetas: PagoTarjeta[];

  constructor(private tarjetaService: TarjetaService) { }

  ngOnInit() {
    this.tarjetaService.getTarjetas().subscribe(
       tarjetas => this.tarjetas = tarjetas
    );
  }

  delete(tarjetas: PagoTarjeta): void {
    swal.fire({
      title: 'Está seguro?',
      text: '¿Seguro que desea eliminar la tarjeta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        for(let i=0;i<this.tarjetas.length; i++){
          if(this.tarjetas[i].id == tarjetas.id){
            this.tarjetas.splice(i,1);
          }
        }
        this.tarjetaService.delete(tarjetas.id).subscribe(
          response => {
            //this.tarjetas = this.tarjetas.filter(tarjetas => tarjetas !== tarjetas)
            swal.fire(
              'Tarjeta Eliminado!',
              `Tarjeta ${tarjetas.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}
