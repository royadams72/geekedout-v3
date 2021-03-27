import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'comics',
    loadChildren: () => import('./features/comics/comics.module').then(m => m.ComicsModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./features/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./features/music/music.module').then(m => m.MusicModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./features/games/games.module').then(m => m.GamesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
