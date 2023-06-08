import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CMSPageRoutingModule } from './cmspage-routing.module';
import { ContentPageComponent } from './content-page/content-page.component';


@NgModule({
  declarations: [
    ContentPageComponent
  ],
  imports: [
    CommonModule,
    CMSPageRoutingModule
  ]
})
export class CMSPageModule { }
