import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.scss'
})
export class ArticleDetailsComponent {


  userData: any;
  id: string | null;
  num: number;
  load: boolean | undefined = false;
  first: number;
  
  public get articleId(){
    return this.activatedRoute.snapshot.paramMap.get("id")
  }
  
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {
    this.id= this.articleId;
    this.num = parseInt(this.id ?? "0");
    this.first = 0;
  }
  
  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.userData = data;
      this.load = true;
      //let tamanio: number = this.userData[0].img.length
    });
  }

  changePage() {
    if (this.first<this.userData[0].img.length -1) {
      this.first++;
    }else{
      this.first=0;
    }
  }

  changePageBack() {
    if (this.first===0) {
      this.first=this.userData[0].img.length -1;
    }else{
      this.first--;
    }
    }

    displayData(int : number) {
      if (int===1) {
        
        let desc = document.getElementById("desc");
        if (desc?.className=="noShow") {
          desc.classList.remove("noShow");
        }else{
          desc?.classList.add("noShow")
        }
      }else{
        let pagos = document.getElementById("pagos");
        if (pagos?.className=="noShow") {
          pagos.classList.remove("noShow");
        }else{
          pagos?.classList.add("noShow")
        }
      }
    }

}
