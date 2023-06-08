import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './site-page/not-found-page/not-found-page.component';
import { LoginPageComponent } from './site-page/login-page/login-page.component';

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
  {
    path: 'cms',
    loadChildren: () =>
      import('./cmspage/cmspage.module').then((m) => m.CMSPageModule),
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '**', // her zaman bulunamayan sayfalar için path en allta tanımlanır.
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
