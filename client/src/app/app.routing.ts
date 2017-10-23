// https://angular.io/docs/ts/latest/guide/router.html
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';

import { GameDetailComponent } from './game-detail/game-detail.component';


const appRoutes: Routes = [
    {
        path:"",
        component: HomeComponent,
    },
    {
        path:"games/:unique",
        component: GameDetailComponent,
    },
    {
        path:"search",
        component: SearchDetailComponent,
    },



]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}







