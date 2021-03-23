interface datos{
  Indice:string;
  Descripcion:string;
  img:string;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicecorporal',
  templateUrl: './indicecorporal.component.html',
  styleUrls: ['./indicecorporal.component.css']
})
export class IndicecorporalComponent implements OnInit {
  peso:number;
  altura:number;
  resultado:number;
  resultadoImg:string;
  resultadoDescripcion:string;
  valores:datos[]=[
    {
        "Indice":"18.5",
        "Descripcion":"Peso inferior al normal",
        "img":"assets/img1.jpg"
    },
    {
        "Indice":"18.5–24.9",
        "Descripcion":"Normal",
        "img":"assets/img2.jpg"
    },
    {
        "Indice":"25.0–29.9",
        "Descripcion":"Peso superior al normal",
        "img":"assets/img3.jpg"
    },
    {
        "Indice":"30.0",
        "Descripcion":"Obesidad",
        "img":"assets/img4.jpg"
    }
]

  constructor() { }

  ngOnInit(): void {
  }
  calcular(){
    this.resultado=this.peso/((this.altura*2)/100);
    
    if (this.resultado<18.5) {
      this.resultadoImg=this.valores[0]['img'];
      this.resultadoDescripcion=this.valores[0]['Descripcion'];
    }if (this.resultado>=18.5 && this.resultado<= 24.9) {
      this.resultadoImg=this.valores[1]['img'];
      this.resultadoDescripcion=this.valores[1]['Descripcion'];
    }
    if (this.resultado>=25.0 && this.resultado<=29.9) {
      this.resultadoImg=this.valores[2]['img'];
      this.resultadoDescripcion=this.valores[2]['Descripcion'];
    }
    if (this.resultado>=30) {
      this.resultadoImg=this.valores[3]['img'];
      this.resultadoDescripcion=this.valores[3]['Descripcion'];
    }
  }
}
