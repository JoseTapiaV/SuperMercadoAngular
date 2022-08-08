import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import swal from 'sweetalert2';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  titulo: string = 'Por favor Inicie Sesión!';
  usuario: Usuario;

  constructor(private authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
      
  }

  login(): void {
    console.log(this.usuario);
    if (this.usuario.correo == null || this.usuario.password == null) {
      swal.fire('Error Login', 'Username o password vacíos!', 'error');
      return;
    }

    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);
      
      let id = response;
      localStorage.setItem('ClienteID', response);
      console.log(localStorage.getItem('ClienteID'));
      console.log(id);
      let rol = response.rol;
      console.log("Id del Cliente " + id)
      
      this.router.navigate(['/productos']);

      swal.fire('Login', `Hola ${this.usuario.correo}, has iniciado sesión con éxito!`, 'success');
    }, err => {
      if (err.status == 400) {
        swal.fire('Error Login', 'Usuario o clave incorrectas!', 'error');
      }
    }
    );
  }

}
