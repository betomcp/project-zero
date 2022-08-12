import { Component, OnInit, OnChanges, SimpleChanges, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  template: '{{title}}',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title: string = "Salve Memo"

  constructor() { }

  ngOnInit() {
    console.log('salve')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
