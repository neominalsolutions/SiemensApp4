import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './site-page/not-found-page/not-found-page.component';
import { LoginPageComponent } from './site-page/login-page/login-page.component';
import { HomePageComponent } from './site-page/home-page/home-page.component';
import { AuthenticationGuard } from './authentication.guard';
import { AuthorizeGuard } from './authorize.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'admin',
    data: {
      roleName: 'admin',
    },
    canActivate: [AuthenticationGuard, AuthorizeGuard],
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
