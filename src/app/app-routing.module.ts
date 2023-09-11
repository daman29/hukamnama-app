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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
