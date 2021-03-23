import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  pantalla:string="";
  cantidad1:string="";
  accion:string;
  resultado:number=0;
  num1:number;

  constructor() { }

  ngOnInit(): void {
  }

  AdjuntarDigito(digito:any) {
    this.pantalla=this.pantalla+digito;
    if (digito>=0 && digito<=9) {
      this.cantidad1=this.cantidad1+(digito.toString());
    }
  };
  sumar(digito:any){
    this.num1=Number(this.cantidad1);
    this.AdjuntarDigito(digito);
    this.cantidad1="";
    this.accion="sumar";
  }
  restar(digito:any){
    this.num1=Number(this.cantidad1);
    this.AdjuntarDigito(digito);
    this.cantidad1="";
    this.accion="restar";
  }
  multiplicar(digito:any){
    this.num1=Number(this.cantidad1);
    this.AdjuntarDigito(digito);
    this.cantidad1="";
    this.accion="multiplicar";
  }
  dividir(digito:any){
    this.num1=Number(this.cantidad1);
    this.AdjuntarDigito(digito);
    this.cantidad1="";
    this.accion="dividir";
  }

  igual(){
    switch (this.accion) {
      case 'sumar':
        this.resultado=this.num1+(Number(this.cantidad1));
        this.pantalla="";
        this.cantidad1="";
        break;
      case 'restar':
        this.resultado=this.num1-(Number(this.cantidad1));
        this.pantalla="";
        this.cantidad1="";
        break;
      case 'multiplicar':
        this.resultado=this.num1*(Number(this.cantidad1));
        this.pantalla="";
        this.cantidad1="";
        break;
      case 'dividir':
        this.resultado=this.num1/(Number(this.cantidad1));
        this.pantalla="";
        this.cantidad1="";
        break;
      default:
        break;
    }
  }
}
