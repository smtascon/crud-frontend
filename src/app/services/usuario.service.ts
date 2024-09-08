import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define la URL de tu backend (cambia a la URL de tu Spring Boot API)
const API_URL = 'http://localhost:8080/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  // Método para obtener todos los usuarios (GET)
  getUsuarios(): Observable<any> {
    return this.http.get(API_URL);
  }

  // Método para agregar un nuevo usuario (POST)
  createUsuario(usuario: any): Observable<any> {
    return this.http.post(API_URL, usuario);
  }

  // Método para actualizar un usuario (PUT)
  updateUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, usuario);
  }

  // Método para eliminar un usuario (DELETE)
  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}
