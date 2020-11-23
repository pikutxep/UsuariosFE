import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuariosServiceService } from '../service/usuarios-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent {

  usuario!: Usuario;
  userLoginForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UsuariosServiceService,
    private userLoginFormBuilder: FormBuilder) {
    this.usuario = new Usuario();

    this.userLoginForm = new FormGroup({
      nombre: new FormControl(this.usuario.nombre,
        [Validators.minLength(4),Validators.required]),
      email: new FormControl(this.usuario.email,
        [Validators.minLength(4),Validators.required]),
      edad: new FormControl(this.usuario.edad,
        [Validators.minLength(4),Validators.required]),
      password: new FormControl(this.usuario.password,
        [Validators.minLength(4),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
      Validators.required]),
    });
  }


  onSubmit() {
    this.usuarioService.save(this.usuario).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/usuarios']);
  }
}
