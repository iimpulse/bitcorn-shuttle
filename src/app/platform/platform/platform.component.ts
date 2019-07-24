import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalSettingsService } from '../../providers/local-settings.service';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlatformComponent implements OnInit {

  opened = true;
  sidebarToggle = true;
  theme: string;
  initialized: boolean = false;
  constructor(private localConfigService: LocalSettingsService, private router: Router) {
    this.localConfigService.getConfiguration()
    .subscribe(config => {
      this.sidebarToggle = config.defaultSidebar == 'descriptive' ? true: false;
      this.theme = config.theme;
      let defaultPage = config.defaultPage;
      if(defaultPage !== 'trade' && !this.initialized) {
        this.initialized = true;
        this.router.navigate(["/platform/"+ defaultPage]);
      }
      
    });
   }

  ngOnInit() {
  
  }

  toggleSidebar(): void {
    this.sidebarToggle = this.sidebarToggle !== true;
  }

  isToggled(): any {
    if (this.sidebarToggle === true) {
      return 'toggled';
    }
  }
}
