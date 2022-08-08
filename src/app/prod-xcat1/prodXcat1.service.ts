import { Injectable } from '@angular/core';
import { ProdXCat1 } from './prodXcat1';
import { Observable } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProdXCatService1{
    private urlEndPoint: string = 'http://localhost:8080/productoCategoria/Comida';
    constructor(private http: HttpClient){}

    getProdXCat(): Observable<ProdXCat1[]>{
        return this.http.get(this.urlEndPoint).pipe(
            map(response => response as ProdXCat1[])
        );
    }
}