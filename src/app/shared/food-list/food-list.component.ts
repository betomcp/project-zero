import { FoodList } from './../../module/food-list';
import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      res => this.foodList = res,
      error => console.log(error)
    );

    this.foodListService.emitEvent.subscribe({
      next: (res) => {
        alert(`Olha você add => ${res.nome}`);
        return this.foodList.push(res);
        // error: (err) => console.log(err)
      }

    });
  }

  public foodListPut(value: string, id: number){
    this.foodListService.foodListPut(value, id).subscribe(
      res =>{
        return console.log(res)
      },
      error => console.log(error)
    )

  }

  public foodListDelete(id: number){
    return this.foodListService.foodListDelete(id).subscribe(
      res => {
        this.foodList = this.foodList.filter(
          item =>{
            return id !== item.id;
          }
        );
      },
      error => console.log(error)
    );
  }

}
