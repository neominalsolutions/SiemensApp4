import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './site-page/not-found-page/not-found-page.component';
import { LoginPageComponent } from './site-page/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './site-page/home-page/home-page.component';
import { PermissionDirective } from './directives/permission.directive';
import { DangerTextDirective } from './directives/danger-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    LoginPageComponent,
    HomePageComponent,
    PermissionDirective,
    DangerTextDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
