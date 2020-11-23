import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
	{ path: 'usuarios', component: ListaUsuariosComponent },
	{ path: 'nuevo', component: FormUsuarioComponent },
	{ path: 'login', component: LoginFormComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
