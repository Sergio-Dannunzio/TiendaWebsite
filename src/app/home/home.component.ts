import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { DataService } from '../data.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  urlArray: string[];
  descArray: string[];
  ubArray: string[];
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
  protected userData: any;
  load: boolean | undefined = false;

  constructor(private dataService: DataService) {
    this.first = 0;
    this.second = 1;
    this.third = 2;
    this.fourth = 3;
    this.fifth = 4;
    this.urlArray = ['assets/pantalon11.jpg', 'assets/pantalon22.jpg', 'assets/pantalon33.jpg', 'assets/pantalon44.jpg', 'assets/pantalon55.jpg', 'assets/pantalon88.jpg'];
    this.descArray = ['Pantalon cargo de trabajo', 'Jean Elastizado Semichupin2', 'Legado jesuita en Córdoba3', 'Jean Elastizado4', 'Pantalones Corte Chino Chupin5', 'Pantalones Corte Chino Chupin6'];
    this.ubArray = ['Pantalon cargo de trabajo', 'Jean Elastizado Semichupin2', 'Legado jesuita en Córdoba33', 'Jean Elastizado4', 'Pantalones Corte Chino Chupin5', 'Pantalones Corte Chino Chupin6'];
  }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.userData = data;

      this.load = true;
    });
  }

  changePage() {
    if (this.first<1) {
      this.first++;
      this.second++;
      this.third++;
      this.fourth++;
      this.fifth++;
    }else if(this.first===1){
      this.first++;
      this.second++;
      this.third++;
      this.fourth++;
      this.fifth=0;
    }else if(this.first===2){
      this.first++;
      this.second++;
      this.third++;
      this.fourth=0;
      this.fifth++;
    }else if(this.first===3){
      this.first++;
      this.second++;
      this.third=0;
      this.fourth++;
      this.fifth++;
    }else if(this.first===4){
      this.first++;
      this.second=0;
      this.third++;
      this.fourth++;
      this.fifth++;
    }else if(this.first===5){
      this.first=0;
      this.second++;
      this.third++;
      this.fourth++;
      this.fifth++;
    }
  }

  changePageBack() {
    if (this.first===0) {
      this.first=5;
      this.second=0;
      this.third=1;
      this.fourth=2;
      this.fifth=3;
    }else if(this.first===1){
      this.first=0;
      this.second=1;
      this.third=2;
      this.fourth=3;
      this.fifth=4;
    }else if(this.first===2){
      this.first=1;
      this.second=2;
      this.third=3;
      this.fourth=4;
      this.fifth=5;
    }else if(this.first===3){
      this.first=2;
      this.second=3;
      this.third=4;
      this.fourth=5;
      this.fifth=0
    }else if(this.first===4){
      this.first=3;
      this.second=4;
      this.third=5;
      this.fourth=0;
      this.fifth=1;
    }else{
      this.first=4;
      this.second=5;
      this.third=0;
      this.fourth=1;
      this.fifth=2;
    }
    }


}
