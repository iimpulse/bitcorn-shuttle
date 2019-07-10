import {Injectable, OnInit} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LocalSettingsService implements OnInit {

  configuration = {
    theme: 'dark'
  };
  constructor() { }

  ngOnInit() {

  }

  saveConfiguration(config: any ){
    this.configuration = config;
  }

  loadConfigurations(config: any) {
    if (config !== '') {
      this.configuration = config;
    }
  }

  getConfiguration(): any {
    return this.configuration;
  }

  getKrakenData(){
  }
}
