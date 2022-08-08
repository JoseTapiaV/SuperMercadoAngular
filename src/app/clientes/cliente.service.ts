import { Injectable } from '@angular/core';
//import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Injectable()
export class ClienteService {
  
  private urlEndPoint: string = 'http://localhost:8080/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})     

  constructor(private http: HttpClient, private router: Router) { }

  private isNoAutorizado(e): boolean {
    if (e.status == 401 || e.status == 403) {
          this.router.navigate(['/login'])
    return true;
    }return false;
  }

  getClientes(): Observable<Cliente[]> {
    //return of(CLIENTES);
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Cliente[]));
  }

  create(cliente: Cliente) : Observable<Cliente> {
    
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders})
    .pipe(map((response: any) => response.cliente as Cliente));
  }

  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}
