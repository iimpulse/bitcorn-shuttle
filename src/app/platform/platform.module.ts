import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformComponent } from './platform/platform.component';
import { PlatformRoutingModule } from './platform-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PlatformRoutingModule,
    SharedModule
  ],
  declarations: [PlatformComponent]
})
export class PlatformModule { }
