import { Component } from '@angular/core'

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.styl']
})
export class NgSwitchComponent {
  alert: string
  constructor() {
    this.alert = 'warning'
  }
}
