import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformComponent } from './platform/platform.component';
import {PlatformRoutingModule} from './platform-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PlatformRoutingModule
  ],
  declarations: [PlatformComponent]
})
export class PlatformModule { }
