import { Injectable, OnInit} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Configuration, Account } from '../shared/models';
@Injectable({
  providedIn: 'root'
})
export class LocalSettingsService implements OnInit {

  defaults = {
    defaultPage: 'trade',
    defaultPlatform: '',
    defaultSidebar: 'descriptive',
    accounts: [{
      accountPlatform: 'bitmex',
      apiKey: 'xxxx',
      accountName: 'mikes test account',
    }],
    theme: 'dark'
  };
  $configuration =  new BehaviorSubject<Configuration>(this.defaults);
  $accounts = new BehaviorSubject<Account[]>(this.defaults.accounts);
  $selectedAccount = new BehaviorSubject<Account>(this.defaults.accounts[0]);


  constructor() { }

  ngOnInit() {
  }

  saveConfiguration(config: any ) {
    if (config !== '') {
      this.$configuration.next(config);
      this.$accounts.next(config.accounts);
    }
  }

  updateSelectedAccount(account: Account) {
    this.$selectedAccount.next(account);
  }

  getAccounts(): BehaviorSubject<Account[]> {
    return this.$accounts;
  }

  getSelectedAccount(): BehaviorSubject<Account> {
   return this.$selectedAccount;
  }

  getConfiguration(): BehaviorSubject<Configuration> {
    return this.$configuration;
  }
}
