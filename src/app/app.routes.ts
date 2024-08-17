import { Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { HomeComponent } from './home/home.component';
import { ArticleListComponent } from './article-list/article-list.component';

export const routes: Routes = [

    {
        path: "home",
        component: HomeComponent,
    },
    {
        path: "articulos/:id",
        component: ArticleDetailsComponent,
    },
    {
        path: "pantalon",
        component: ArticleListComponent
    },
    {
        path: "calzado",
        component: ArticleListComponent
    },
    {
        path: "buzo",
        component: ArticleListComponent
    },
    {
        path: "campera",
        component: ArticleListComponent
    },
    {
        path: "remera",
        component: ArticleListComponent
    }

];
