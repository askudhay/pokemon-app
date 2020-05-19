import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SelectivePreloadStrategy } from './selective-preload-strategy';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    data: {preload: true}
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
    data: {preload: false} 
  },
  {
    path: 'pokemon',
    loadChildren: () =>
      import('./pokemon/pokemon.module').then((m) => m.PokemonModule),
    data: {preload: true}
  },
  {
    path: 'pokemon/:id',
    loadChildren: () =>
      import('./pokemon-stats/pokemon-stats.module').then(
        (m) => m.PokemonStatsModule
      ),
    data: {preload: false}
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: SelectivePreloadStrategy}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
