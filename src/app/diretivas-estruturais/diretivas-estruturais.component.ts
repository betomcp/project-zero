import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {


  public condition: boolean = true

  public list: Array<{nome: string}> = [{nome: 'beto'}, {nome: 'tomi'}, {nome: 'ze'}]

  constructor() { }

  deletOnClick(i: number): void{
    this.list.splice(i, 1)
  }

  addOnClick(): void{
    this.list.push({nome: 'novo nome'})
  }

  ngOnInit() {
  }

}
