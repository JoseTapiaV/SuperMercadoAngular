import { Injectable } from '@angular/core';
import { ProdXSuc } from './prodXsuc';
import { Observable } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProdXSucService{
    private urlEndPoint: string = 'http://localhost:8080/prodXsucursal/1';
    constructor(private http: HttpClient){}

    getProdXSuc(): Observable<ProdXSuc[]>{
        return this.http.get(this.urlEndPoint).pipe(
            map(resopnse => resopnse as ProdXSuc[])
        );
    }
}