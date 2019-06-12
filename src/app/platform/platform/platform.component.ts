import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit {

  opened = true;
  sidebarToggle = false;
  constructor() { }

  ngOnInit() {
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
