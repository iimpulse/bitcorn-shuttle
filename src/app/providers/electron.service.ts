import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, remote, app } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { LocalSettingsService } from './local-settings.service';

@Injectable()
export class ElectronService {

  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  fs: typeof fs;
  path: typeof path;
  app: typeof app;

  constructor(localConfigService: LocalSettingsService) {
    // Conditional imports
    if (this.isElectron()) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.webFrame = window.require('electron').webFrame;
      this.remote = window.require('electron').remote;
      this.app = window.require('electron').app;
      this.childProcess = window.require('child_process');
      this.fs = window.require('fs');
      this.path = window.require('path');
      const userDataPath = (this.app || this.remote.app).getPath('userData');
      // We'll use the `configName` property to set the file name and path.join to bring it all together as a string
      const filePath = this.path.join(userDataPath, 'shuttle.json');
      localConfigService.loadConfigurations(this.parseConfigurationFile(filePath));
    }
  }

  parseConfigurationFile(filePath: string): any {
    try {
      return JSON.parse(this.fs.readFileSync(filePath, 'utf8'));
    } catch (error) {
      // if there was some kind of error, return the passed in defaults instead.
      return '';
    }
  }

  isElectron = () => {
    return window && window.process && window.process.type;
  }

}
