import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <app-form></app-form>

    <hr>
    <hr>

    <!-- <app-food-add></app-food-add>

    <hr>

    <app-food-list></app-food-list>

    <hr>
    <hr> -->

    <!-- <app-header-c></app-header-c>

    <ng-template [ngIf]="getDados">
      <h1>{{getDados.nome}}</h1>
      <h2>{{getDados.idade}}</h2>
    </ng-template>
    <app-output-c (enviaDados)="setDados($event)"></app-output-c>


    <hr>
    <hr>

    <app-input-c [nome]="'xyz'"></app-input-c>



    <hr>

    {{valor}}


    <app-title *ngIf="aparecer"></app-title>
    <button (click)="incrementNum()">incremetntar</button>
    <button (click)="destruir()">destruir</button>

    <app-data-biding></app-data-biding>

    <hr>

    <app-diretivas-estruturais></app-diretivas-estruturais>

    <hr>

    <app-diretivas-atributos>
      <h1>ng content 1</h1>
      <h2>ng content 2</h2>
    </app-diretivas-atributos>

    <hr style="margin-top: 200vh;"> -->

    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  //caption = 'caption of the app'

  public valor: number = 8;
  public aparecer: boolean = true;
  public getDados: {nome: string, idade: number} | undefined

  constructor(){
  }

  public setDados(event: {nome: string, idade: number}){
    this.getDados = event
  }


  incrementNum(): number{
    return this.valor++
  }


  destruir(){
    return this.aparecer = !this.aparecer
  }

  ngOnInit(): void {
    setTimeout(()=>{
      console.log(1)
    }, 5000)
  }

  ngDoCheck(): void {
    console.log('do check')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInitk')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

}
