import { Injectable } from '@angular/core';
import { ProdXCat } from './prodXcat';
import { Observable } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProdXCatService{
    private urlEndPoint: string = 'http://localhost:8080/productoCategoria/Frutas';
    constructor(private http: HttpClient){}

    getProdXCat(): Observable<ProdXCat[]>{
        return this.http.get(this.urlEndPoint).pipe(
            map(response => response as ProdXCat[])
        );
    }
}