import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuariosServiceService } from '../service/usuarios-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private userService: UsuariosServiceService, private router: Router) {

  }

  ngOnInit() {
    if (this.userService.authenticated===true) {
      this.userService.findAll().subscribe((data: Usuario[]) => {
        this.usuarios = data;
      });
    } else {
      this.gotoLogin();
    }
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }
}
