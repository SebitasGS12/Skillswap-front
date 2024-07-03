import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-personas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-personas.component.html',
  styleUrl: './listado-personas.component.css'
})
export class ListadoPersonasComponent {

  personas = [
    {
      name: 'Marco Jhonson',
      email: 'alex@gmail.com',
      expertise: 'Desarrollador experto en JAVA',
      img: 'assets/images/imgUser.png'
    },
    {
      name: 'Lauren Miller',
      email: 'lauren@gmail.com',
      expertise: 'Desarrolladora experta en PYTHON',
      img: 'assets/images/userphoto.png'
    },
    {
      name: 'Chris Thompson',
      email: 'chris@gmail.com',
      expertise: 'Desarrollador experto en C#',
      img: 'assets/images/imgUser.png'
    },
    {
      name: 'Sam Brown',
      email: 'sam@gmail.com',
      expertise: 'Experto en SQL y MongoDB',
      img: 'assets/images/imgUser.png'
    }
  ];

}
