import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalSettingsService } from '../../providers/local-settings.service';
import { Account, Configuration } from '../../shared/models';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.scss']
})
export class TradingComponent implements OnInit {

  @ViewChild('accountSelect', {static: false}) accountSelect;
  config: Configuration;
  account: Account;
  tickers = [{value: 'xbtusd', viewValue: 'XBTUSD'}, {value: 'ethusd', viewValue: 'ETHUSD'}];
  selectedTicker = new FormControl(0);
  constructor(localSettingsService: LocalSettingsService) {
   localSettingsService.getSelectedAccount().subscribe(selectedAccount => {
      this.account = selectedAccount;
    });
  }

  ngOnInit() {
    this.selectedTicker.valueChanges.subscribe(newTicker => {
      console.log(newTicker); // index in tickers array
      // this is the ticker they want, we might want to debounce here in case people rip through them.
    });
  }

  showAccounts() {
    this.accountSelect.open();
  }

}
