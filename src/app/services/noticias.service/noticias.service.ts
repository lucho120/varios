import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../../models/noticia.models';
import { Autor } from 'src/app/models/autor.models';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(public http:HttpClient) {}

  verNoticias():Observable<Noticia[]>{
    return this.http.get<Noticia[]>("https://localhost:44300/api/noticia/listar/");
  }
  eliminarNoticia(noticiaID:number):Observable<boolean>{
    return this.http.get<boolean>("https://localhost:44300/api/noticia/eliminar/"+noticiaID);
  }
  listadoAutores():Observable<Autor[]>{
    return this.http.get<Autor[]>("https://localhost:44300/api/noticia/listadoAutores/");
  }
  agregarNoticia(noticia: Noticia): Observable<boolean>
  {
    return this.http.post<boolean>("https://localhost:44300/api/noticia/agregar",noticia)
  }
  editarNoticia(noticia: Noticia): Observable<boolean>
  {
    return this.http.put<boolean>("https://localhost:44300/api/noticia/Editar",noticia)
  }

}
