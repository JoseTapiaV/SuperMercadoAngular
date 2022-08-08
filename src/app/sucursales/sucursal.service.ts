import { Injectable } from '@angular/core';
import { Sucursal } from './sucursal';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SucursalService{
    private urlEndPoint: string = 'http://localhost:8080/sucursales';
    constructor(private http: HttpClient){}

    getSucursales(): Observable<Sucursal[]> {
        return this.http.get(this.urlEndPoint).pipe(
            map(response => response as Sucursal[])
        );
    }
}