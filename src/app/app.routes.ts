import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import {Search} from './search/search';
import { Theater } from './theater/theater';
import { Details } from './details/details';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about', component: About},
    {path: 'search', component: Search},
    {path: 'theaters', component: Theater },
    {path: 'details/:id', component: Details},
    {path: '**', redirectTo: ''}
];
