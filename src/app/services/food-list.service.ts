import { FoodList } from './../module/food-list';
import { HttpClient, HttpClientModule, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<string> = ["x bacon", "feijão", "ovo"];

  private url: string = "http://localhost:3000/"; //list-food

  private httpOptions = {  //headers customizados
    headers: new HttpHeaders({
      'Content-Type': 'aplication/json',
      Authorization: "token boe3er387"
    })
  }

  constructor(private http: HttpClient) { }


  public foodList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`)
      .pipe(
        res => res,
        error => error

      )
  }

  public foodListAdd(value: string): Observable<FoodList>{
    return this.http.post<FoodList>(`${this.url}list-food`, {nome: value}, this.httpOptions)
      .pipe(
        res => res,
        error => error
      )
  }

  public foodListAlert(value: FoodList){
    return this.emitEvent.emit(value);
  }

  public foodListPut(value: string, id: number): Observable<FoodList>{
    return this.http.put<FoodList>(`${this.url}list-food/${id}`, {nome: value})
      .pipe(
        res => res,
        error => error
      )
  }

  public foodListDelete(id: number): Observable<FoodList>{
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`)
      .pipe(
        res => res,
        error => error
      )
  }
}
