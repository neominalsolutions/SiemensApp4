import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-page/admin-page.module').then((m) => m.AdminPageModule),
  },
  {
    path: 'crm',
    loadChildren: () =>
      import('./crm-page/crm-page.module').then((m) => m.CrmPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
