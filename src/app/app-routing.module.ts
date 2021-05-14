import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// Declare all page paths
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ulster',
    loadChildren: () => import('./ulster/ulster.module').then( m => m.UlsterPageModule)
  },
  {
    path: 'munster',
    loadChildren: () => import('./munster/munster.module').then( m => m.MunsterPageModule)
  },
  {
    path: 'connaught',
    loadChildren: () => import('./connaught/connaught.module').then( m => m.ConnaughtPageModule)
  },
  {
    path: 'leinster',
    loadChildren: () => import('./leinster/leinster.module').then( m => m.LeinsterPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },
  {
    path: 'connaught-counties',
    loadChildren: () => import('./connaught-counties/connaught-counties.module').then( m => m.ConnaughtCountiesPageModule)
  },
  {
    path: 'leinster-counties',
    loadChildren: () => import('./leinster-counties/leinster-counties.module').then( m => m.LeinsterCountiesPageModule)
  },
  {
    path: 'ulster-counties',
    loadChildren: () => import('./ulster-counties/ulster-counties.module').then( m => m.UlsterCountiesPageModule)
  },
  {
    path: 'munster-counties',
    loadChildren: () => import('./munster-counties/munster-counties.module').then( m => m.MunsterCountiesPageModule)
  },
    {
    path: 'status',
    loadChildren: () => import('./status/status.module').then( m => m.StatusPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
