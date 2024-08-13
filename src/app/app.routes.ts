import { Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {
        path: "home",
        component: HomeComponent,
    },
    {
        path: "articulos/:id",
        component: ArticleDetailsComponent,
    },

];
