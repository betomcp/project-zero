import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  public listComidas: Array<{comida: string, preco: number}> = [
    {comida: 'x-salada', preco: 10},
    {comida: 'bacon', preco: 20.2},
    {comida: 'batata', preco: 22}
  ];

  constructor() { }

  ngOnInit() {
  }

  public submitForm(form: NgForm){
    console.log(form.value)
  }
}
