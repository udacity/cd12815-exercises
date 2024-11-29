import { Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { PostsComponent } from './posts/posts.component';

export const routes: Routes = [
    {path: '', component: PostsComponent},
    {path: 'history', component: HistoryComponent}

];
