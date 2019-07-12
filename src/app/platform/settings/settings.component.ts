import { Component, OnInit } from '@angular/core';
import { LocalSettingsService } from '../../providers/local-settings.service';
import { ViewEncapsulation } from '@angular/core';
import { Configuration } from '../../shared/models';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent implements OnInit {

  selectedPlatform: string;
  selectedTheme: string;
  selectedSidebar: string;
  selectedPage: string;
  apiKey: string;
  accountName: string;
  accountPlatform: string;
  config: Configuration;
  loadingPage: any;
  success: boolean;
  
  constructor(private localConfigService: LocalSettingsService) {
    this.localConfigService.getConfiguration()
    .subscribe(config => {
      this.selectedPlatform = config.defaultPlatform;
      this.selectedTheme = config.theme;
      this.selectedSidebar = config.defaultSidebar;
      this.selectedPage = config.defaultPage;
      this.apiKey = config.accounts[0].apiKey;
      this.accountName = config.accounts[0].accountName;
      this.accountPlatform = config.accounts[0].accountPlatform;
    });
  }

  ngOnInit() {
    this.success = false;
  }

  saveConfiguration() {
    // Build new configuration file from settings
    // Schema in models.ts
    let newConfig = {
      defaultPage: this.selectedPage,
      defaultPlatform: this.selectedPlatform,
      defaultSidebar: this.selectedSidebar,
      theme: this.selectedTheme,
      accounts: [{
        accountPlatform: this.accountPlatform,
        apiKey: this.apiKey,
        accountName: this.accountName
      }]
    }
    this.localConfigService.saveConfiguration(newConfig);
    this.success = true;
    setTimeout(() => {
      this.success = false;
    }, 1000);
  }

  // 
}
