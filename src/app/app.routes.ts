import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ForbiddenLettersComponent } from './components/forbidden-letters/forbidden-letters.component';

export const routes: Routes = [
    { path: "", component: ForbiddenLettersComponent, pathMatch: "full" },
    {path: "sort", component: HomeComponent}
];
