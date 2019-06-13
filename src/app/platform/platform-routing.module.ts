import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlatformComponent} from './platform/platform.component';
import {HistoryComponent} from './history/history.component';


const routes: Routes = [{
    path: '',
    component: PlatformComponent,
  },
  {
    path: 'history',
    component: HistoryComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PlatformRoutingModule {}
