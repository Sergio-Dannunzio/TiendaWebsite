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
        path: "pantalon",
        component: ArticleListComponent
    },
    {
        path: "pantalon",
        children:[
            {path:":id",
            component: ArticleDetailsComponent}
        ]
    },
    {
        path: "calzado",
        component: ArticleListComponent
    },
    {
        path: "calzado",
        children:[
            {path:":id",
            component: ArticleDetailsComponent}
        ]
    },
    {
        path: "buzo",
        component: ArticleListComponent
    },
    {
        path: "buzo",
        children:[
            {path:":id",
            component: ArticleDetailsComponent}
        ]
    },
    {
        path: "campera",
        component: ArticleListComponent
    },
    {
        path: "campera",
        children:[
            {path:":id",
            component: ArticleDetailsComponent}
        ]
    },
    {
        path: "remera",
        component: ArticleListComponent
    },
    {
        path: "remera",
        children:[
            {path:":id",
            component: ArticleDetailsComponent}
        ]
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    }

];
