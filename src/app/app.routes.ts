import { Routes } from '@angular/router';
import { notaListComponent } from './nota-list/nota-list.component';
import { CreatenotaComponent } from './create-nota/create-nota.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const routes: Routes = [
    {path: 'list', component: notaListComponent},
    {path: 'create', component: CreatenotaComponent},
    {path: 'home', component: notaListComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
