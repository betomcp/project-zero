import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor(private foodListService:FoodListService) { }

  ngOnInit() {
  }

  public listAddItem(value: string){
    this.foodListService.foodListAdd(value).subscribe(
      res => this.foodListService.foodListAlert(res),
      error => error
    )
  }

}
