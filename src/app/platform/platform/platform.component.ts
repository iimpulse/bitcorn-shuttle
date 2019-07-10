import { Component, OnInit } from '@angular/core';
import { LocalSettingsService } from '../../providers/local-settings.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlatformComponent implements OnInit {

  opened = true;
  sidebarToggle = false;
  theme: string;
  constructor(private localConfigService: LocalSettingsService) { }

  ngOnInit() {
    this.theme = this.localConfigService.getConfiguration().theme;
  }

  toggleSidebar(): void {
    this.sidebarToggle = this.sidebarToggle !== true;
    console.log(this.sidebarToggle);
  }

  isToggled(): any {
    if (this.sidebarToggle === true) {
      return 'toggled';
    }
    return;
  }
}
