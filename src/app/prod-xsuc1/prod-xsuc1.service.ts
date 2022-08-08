import { Injectable } from '@angular/core';
import { ProdXSuc1 } from './prodXsuc1';
import { Observable } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProdXSucService1{
    private urlEndPoint: string = 'http://localhost:8080/prodXsucursal/2';
    constructor(private http: HttpClient){}

    getProdXSuc(): Observable<ProdXSuc1[]>{
        return this.http.get(this.urlEndPoint).pipe(
            map(resopnse => resopnse as ProdXSuc1[])
        );
    }
}