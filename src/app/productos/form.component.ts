import { Component, OnInit } from '@angular/core'
import {Producto} from './producto'
import { ProductoService } from './producto.service'
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormProducto implements OnInit {

  public cliente: Producto = new Producto();
  public titulo:string = "Crear Producto";

  constructor(private productoService: ProductoService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
  }

  
}
