import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  public dataServices = [
    {
      titulo1: 'UI/UX',
      titulo2: 'Designer',
      icono: 'fas fa-th-large',
      modalInfo: [
        {
          nombre: 'Creativo desarrollador de experiencia de usuario',
        },
        {
          nombre: 'Desarrollador de interface de usuario',
        },
        {
          nombre: 'Desarrollador de paginas web',
        },
        {
          nombre: 'desrrollador de backend',
        },
      ],
    },
    {
      titulo1: 'FrontEnd',
      titulo2: 'Developer',
      icono: 'fas fa-code',
      modalInfo: [
        {
          nombre: 'Creativo desarrollador de experiencia de usuario',
        },
        {
          nombre: 'Desarrollador de interface de usuario',
        },
        {
          nombre: 'Desarrollador de paginas web',
        },
        {
          nombre: 'desrrollador de backend',
        },
      ],
    },
   
  ];

  constructor() {}

  ngOnInit(): void {}
}
