import { Injectable } from '@angular/core';
import { Categoria } from './categoria';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoriaService{
    private urlEndPoint: string = 'http://localhost:8080/categorias';
    constructor(private http: HttpClient){}

    getCategorias(): Observable<Categoria[]>{
        return this.http.get(this.urlEndPoint).pipe(
            map(response => response as Categoria[])
        );
    }
}