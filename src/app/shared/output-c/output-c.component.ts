import { Component, OnInit, Output, EventEmitter } from '@angular/core';;

@Component({
  selector: 'app-output-c',
  templateUrl: './output-c.component.html',
  styleUrls: ['./output-c.component.scss']
})
export class OutputCComponent implements OnInit {

  @Output() public enviaDados = new EventEmitter()

  public list: Array<{nome: string, idade: number}> = [
    {nome: 'roberto', idade: 21},
    {nome: 'tomi', idade: 19},
    {nome: 're', idade: 46}
  ]

  constructor() { }

  ngOnInit() {
  }

  public getDados(event: number): void{
    this.enviaDados.emit(this.list[event])
  }

}
