import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { NegocioService } from '../../service/negocioService';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private negocioService: NegocioService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    const container = this.renderer.selectRootElement('#container', true);
    const registerBtn = this.renderer.selectRootElement('#register', true);
    const loginBtn = this.renderer.selectRootElement('#login', true);

    if (registerBtn && loginBtn && container) {
      this.renderer.listen(registerBtn, 'click', () => {
        this.renderer.addClass(container, 'active');
      });

      this.renderer.listen(loginBtn, 'click', () => {
        this.renderer.removeClass(container, 'active');
      });
    }
  }

  register(user: Usuario) {
    this.negocioService.registrarNuevaCuenta(user).subscribe(
      (response) => {
        console.log('Usuario registrado exitosamente:', response);
        this.router.navigate(['/menuPrincipal']);
      }
    );
  }

  login(credentials: Usuario) {
    console.log(credentials);

    this.negocioService.inciarSesion(credentials).subscribe(
      (response) => {
        console.log('Usuario ha iniciado sesión:', response);
        this.router.navigate(['/menuUsuario']);
      }
    );
  }
}
