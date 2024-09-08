import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'] 
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // Obtener los usuarios desde el backend al iniciar el componente
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }

  editarUsuario(usuario: Usuario): void {
    // Lógica para editar un usuario
    console.log('Editando usuario', usuario);
  }

  eliminarUsuario(id: number): void {
    // Lógica para eliminar un usuario
    this.usuarioService.deleteUsuario(id).subscribe(() => {
      this.usuarios = this.usuarios.filter(u => u.id !== id);
      console.log('Usuario eliminado');
    });
  }
}
