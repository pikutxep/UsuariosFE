import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {

  private url: string;
  authenticated = false;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/usuarios';
  }

  public findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  public save(usuario: Usuario) {
    return this.http.post<Usuario>(this.url, usuario);
  }

  public login(usuario: Usuario, callback) {
    

    this.http.post(this.url + '/login', usuario).subscribe(response => {
      //const result = response.json();

      if (response === 0) {
        this.authenticated = true;
      }
      return callback && callback(response);
    }
    );

  }
}