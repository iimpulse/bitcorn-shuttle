import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './platform/platform.component';
import { HistoryComponent } from './history/history.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { TradingComponent } from './trading/trading.component';


const routes: Routes = [{
    path: '',
    component: PlatformComponent,
    children: [
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: '',
        component: TradingComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PlatformRoutingModule {}
