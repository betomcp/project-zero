import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {


  public controll: boolean = true

  public nome: string = "beto"
  public idade: number = 21
  public ckBtn: boolean = true
  public imgSrc: string = "https://classic.exame.com/wp-content/uploads/2021/12/nasa-james-webb.jpg?quality=70&strip=info&w=1008"

  constructor() { }

  ngOnInit() {
  }

  btnClick(valor: MouseEvent): void{

    console.log(valor)
    console.log('salve')

    if(this.controll){
      this.imgSrc = "https://img.olhardigital.com.br/wp-content/uploads/2022/02/telescopio-james-webb-2.jpg"
      this.controll = false
    }else{
      this.imgSrc = "https://classic.exame.com/wp-content/uploads/2021/12/nasa-james-webb.jpg?quality=70&strip=info&w=1008"
      this.controll = true
    }
  }

  //ckBtn(): boolean{
    //return false
  //}

}
