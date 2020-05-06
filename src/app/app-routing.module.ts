import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'first',
    loadChildren: () =>
        import('./first/first.module').then(m => m.FirstModule),
    data: { preload: true },
  },
  {
    path: 'second',
    loadChildren: () =>
        import('./second/second.module').then(m => m.SecondModule),
    data: { preload: true },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
