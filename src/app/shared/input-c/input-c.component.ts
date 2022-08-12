import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-c',
  templateUrl: './input-c.component.html',
  styleUrls: ['./input-c.component.scss']
})
export class InputCComponent implements OnInit {

  @Input() public nome: string

  constructor() { }

  ngOnInit() {
  }

}
