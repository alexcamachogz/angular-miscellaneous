import { Component } from '@angular/core'

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.styl']
})
export class NgStyleComponent {
  size = 30

  constructor() {
    console.log('Hola')
  }
}
