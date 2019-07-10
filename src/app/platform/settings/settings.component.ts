import { Component, OnInit } from '@angular/core';
import { LocalSettingsService } from '../../providers/local-settings.service';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent implements OnInit {

  constructor(private localConfigService: LocalSettingsService) {}

  ngOnInit() {
  }

}
