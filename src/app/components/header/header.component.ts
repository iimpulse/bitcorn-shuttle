import { Component, OnInit, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LocalSettingsService } from '../../providers/local-settings.service';
import { Configuration, Account } from '../../shared/models';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() user: any = {};
  configuration: Configuration;
  accounts: Account[];
  selectedAccount;
  showAccountSelection = false;
  constructor(
    private localSettingsService: LocalSettingsService,
    private router: Router
  ) {

    this.localSettingsService.getAccounts().subscribe(acts => {
      this.accounts = acts;
    });

    router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    )
      .subscribe(event => {
        if (event.url !== '/') {
          this.showAccountSelection = true;
        } else {
          this.showAccountSelection = false;
        }
      });
  }

  ngOnInit() {

  }

  onAccountChange() {
    this.localSettingsService.updateSelectedAccount(this.selectedAccount);
  }

  logout(): void {
    //this.authService.signOut();
    this.navigate('/auth/login');
  }

  navigate(link): void {
    this.router.navigate([link]);
  }

}
