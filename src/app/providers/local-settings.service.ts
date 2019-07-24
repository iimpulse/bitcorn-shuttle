import {Injectable, OnInit} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Configuration } from '../shared/models';
@Injectable({
  providedIn: 'root'
})
export class LocalSettingsService implements OnInit {

  defaults = {
    defaultPage: 'settings',
    defaultPlatform: '',
    defaultSidebar: 'descriptive',
    accounts: [{
      accountPlatform: '',
      apiKey: '',
      accountName: '',
    }],
    theme: 'dark'
  };
  $configuration =  new BehaviorSubject<Configuration>(this.defaults);


  constructor() { }

  ngOnInit() {
  }

  saveConfiguration(config: any ) {
    if (config !== '') {
      this.$configuration.next(config);
    }
  }

  getConfiguration(): BehaviorSubject<Configuration> {
    return this.$configuration;
  }
}
