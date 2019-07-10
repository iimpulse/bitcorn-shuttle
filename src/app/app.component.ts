import { Component, OnInit, OnDestroy } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from './components/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription;
  public user: any;
  opened = true;
  constructor(public electronService: ElectronService, private authService: AuthService,
              private router: Router,
              private domSanitizer: DomSanitizer, private translate: TranslateService) {

    translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);

    if (electronService.isElectron()) {
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }

  public ngOnInit() {
      // init this.user on startup
      this.authService.me().subscribe(data => {
        this.user = data.user;
      });

      // update this.user after login/register/logout
      this.userSubscription = this.authService.$userSource.subscribe((user) => {
        this.user = user;
      });
    }
  logout(): void {
      this.authService.signOut();
      this.navigate('');
  }

  navigate(link): void {
      this.router.navigate([link]);
  }

  ngOnDestroy() {
      if (this.userSubscription) {
        this.userSubscription.unsubscribe();
      }
  }
}
