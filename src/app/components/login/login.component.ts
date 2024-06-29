import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NegocioService } from '../../service/negocioService';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private router: Router,private negocioService: NegocioService) { }

  ngOnInit() {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    if (registerBtn && loginBtn && container) {
      registerBtn.addEventListener("click", () => {
        container.classList.add("active");
      });

      loginBtn.addEventListener("click", () => {
        container.classList.remove("active");
      });
    }
  }

  register(user: Usuario) {
    this.negocioService.registrarNuevaCuenta(user).subscribe(
      (response) => {
        console.log('Usuario registrado exitosamente:', response);
        this.router.navigate(['/menuPrincipal'])
      }
    );
  }

  login(credentials: Usuario) {
    console.log(credentials)
    

    this.negocioService.inciarSesion(credentials).subscribe(
      (response) => {
        console.log('Usuario ha iniciado sesión:', response);
        this.router.navigate(['/menuUsuario'])
      }
    );
  }

}
