import { Component, OnInit } from '@angular/core'
import {PagoTarjeta} from './tarjeta'
import { TarjetaService } from './tarjeta.service'
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-tarjetas',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

    public tarjeta: PagoTarjeta = new PagoTarjeta();
    public titulo:string = "Crear Tarjeta";

    constructor(private tarjetaService: TarjetaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
      this.cargarTarjeta();
      console.log(localStorage.getItem('ClienteID'));
    }


    create(): void {
      this.tarjetaService.create(this.tarjeta)
        .subscribe(tarjeta => {
          this.router.navigate(['/tarjetas'])
          swal.fire('Nueva tarjeta', `Tarjeta ${tarjeta.nombre} creado con éxito!`, 'success')
        }
        );
    }

    cargarTarjeta(): void{
      this.activatedRoute.params.subscribe(params => {
        let id = params['id']
        if(id){
          this.tarjetaService.getTarjeta(id).subscribe( (tarjeta) => this.tarjeta = tarjeta)
        }
      })
    }

    update():void{
      this.tarjetaService.update(this.tarjeta)
      .subscribe( tarjeta => {
        this.router.navigate(['/tarjetas'])
        swal.fire('Tarjeta Actualizada', `Tarjeta ${tarjeta.nombre} actualizado con éxito!`, 'success')
      }
      )
    }

  }
