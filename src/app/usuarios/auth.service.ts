import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlEndPoint: string = 'http://localhost:8080/login';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})  

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: Usuario): Observable<any> {
    console.log(usuario.id)
    return this.http.post(this.urlEndPoint,usuario);
  }


  
}
