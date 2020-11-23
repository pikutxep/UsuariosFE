import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuariosServiceService } from '../service/usuarios-service.service';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  usuario!: Usuario;
  userLoginForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UsuariosServiceService,
    private userLoginFormBuilder: FormBuilder) {

    this.usuario = new Usuario();

    this.userLoginForm = new FormGroup({
      email: new FormControl(this.usuario.email,
        [Validators.minLength(4),
        Validators.required]),
      password: new FormControl(this.usuario.password,
        [Validators.minLength(4),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
        Validators.required]),
    });

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.usuarioService.login(this.usuario, (response) => {
      if (response === 0) {
        this.gotoUserList()
      } else if (response === 2) {
        alert('Usuario no encontrado');
      } else if (response === 1) {
        alert('Password incorrecto');
      }
    }
    );
  }

  gotoUserList() {
    this.router.navigate(['/usuarios']);
  }
}
