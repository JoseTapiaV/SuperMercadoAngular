import { Injectable } from '@angular/core';
import { ProdXSuc2 } from './prodXsuc2';
import { Observable } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProdXSucService2{
    private urlEndPoint: string = 'http://localhost:8080/prodXsucursal/3';
    constructor(private http: HttpClient){}

    getProdXSuc(): Observable<ProdXSuc2[]>{
        return this.http.get(this.urlEndPoint).pipe(
            map(resopnse => resopnse as ProdXSuc2[])
        );
    }
}