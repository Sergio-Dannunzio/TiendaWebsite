import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { CardComponent } from "../card/card.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CardComponent, FooterComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {

  userData: any;
  id: string | null;
  num: number;
  load: boolean | undefined = false;
  first: number;
  filteredData: any;
  url: string;
  
  public get articleId(){
    return this.activatedRoute.snapshot.paramMap.get("id")
  }
  
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {
    this.id= this.articleId;
    this.num = parseInt(this.id ?? "0");
    this.first = 0;
    this.url = "";
  }
  
  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.userData = data;
      const fullUrl = this.activatedRoute.snapshot.url.join('/');
      this.url = fullUrl;
      if (fullUrl!="hombre" && fullUrl!="trabajo") {
        this.filteredData = this.userData.filter((item: { tipo: any; }) => item.tipo.toLowerCase() === fullUrl);
      }else if(fullUrl==="hombre"){
        this.filteredData = this.userData.filter((item: { sexo: any; }) => item.sexo.toLowerCase() === fullUrl);
      }else{
        this.filteredData = this.userData.filter((item: { estilo: any; }) => item.estilo.toLowerCase() === fullUrl);
      }
      this.load = true;

  
    });
  }
}
