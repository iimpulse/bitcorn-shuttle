import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformComponent } from './platform/platform.component';
import { PlatformRoutingModule } from './platform-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HistoryComponent } from './history/history.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { TradingComponent } from './trading/trading.component';
import { ChartComponent } from '../components/chart/chart.component';

@NgModule({
  imports: [
    CommonModule,
    PlatformRoutingModule,
    SharedModule
  ],
  declarations: [PlatformComponent, HistoryComponent, AccountComponent, SettingsComponent, TradingComponent, ChartComponent]
})
export class PlatformModule { }
