import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCComponent } from './header-c/header-c.component';
import { InputCComponent } from './input-c/input-c.component';
import { OutputCComponent } from './output-c/output-c.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderCComponent,
    InputCComponent,
    OutputCComponent,
    FoodListComponent,
    FoodAddComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    HeaderCComponent,
    InputCComponent,
    OutputCComponent,
    FoodListComponent,
    FoodAddComponent
  ]
})
export class SharedModule { }
