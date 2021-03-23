interface persona{
  nombre:string,
  nota:number,
  edad:number
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  nombre:string="";
  nota:number=0;
  edad:number=0;
  
  //Todos los estudiantes
  estudiantes:persona[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  agregar(){   
    if (this.nombre!="") {
      if (this.nota>=0 && this.nota<=5) {
        if (this.edad>=0 && this.edad<=80) {
          this.estudiantes.push({ nombre:this.nombre, nota:this.nota, edad:this.edad });
          this.nombre="";
          this.nota=0;
          this.edad=0;
        }else{
          alert("Edad invalida");
        }
      }else{
        alert("Nota invalida");
      }
    }else{
      alert("Nombre no puede estar vacío ")
    } 
  }
}
