import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    title: 'Hukamnama',
    path: '',
    loadComponent: () =>
      import('./components/hukamnama-page/hukamnama-page.component').then(
        (mod) => mod.HukamnamaPageComponent
      ),
  },
  {
    title: 'Hukamnama',
    path: 'hukamnama',
    loadComponent: () =>
      import('./components/shabad-page/shabad-page.component').then(
        (mod) => mod.ShabadPageComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
