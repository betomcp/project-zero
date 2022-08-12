import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {


  public valor: boolean = true
  public height: string = '20px'

  public nome: string = 'beto'

  public data: Date = new Date()

  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      if(this.valor){
        this.valor = !this.valor
      }else{
        this.valor = !this.valor
      }

      if(this.height == '20px'){
        this.height = '23px'
      }else{
        this.height = '20px'
      }

    }, 2000)
  }

}
