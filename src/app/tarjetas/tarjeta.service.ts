import { Injectable } from '@angular/core';
//import { TARJETAS } from './tarjetas.json';
import { PagoTarjeta } from './tarjeta';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable()
export class TarjetaService {

  private urlEndPoint: string = 'http://localhost:8080/tarjetas';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getTarjetas(): Observable<PagoTarjeta[]> {
    //return of(CLIENTES);
    return this.http.get(this.urlEndPoint+'/'+localStorage.getItem('ClienteID')).pipe(
      map(response => response as PagoTarjeta[])
    );
  }


  create(tarjeta: PagoTarjeta) : Observable<PagoTarjeta> {
    return this.http.post<PagoTarjeta>(this.urlEndPoint, tarjeta, {headers: this.httpHeaders})
  }

  getTarjeta(id: number): Observable<PagoTarjeta>{
    return this.http.get<PagoTarjeta>(`${this.urlEndPoint}/${id}`)
  }

  update(tarjeta: PagoTarjeta): Observable<PagoTarjeta>{
    return this.http.put<PagoTarjeta>(`${this.urlEndPoint}/${tarjeta.id}`, tarjeta, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<PagoTarjeta>{
    return this.http.delete<PagoTarjeta>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }

}
