import { Component } from '@angular/core'

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.styl']
})
export class NgClassComponent {
  newAlert = 'alert-danger'
  loading = false
  properties = {
    danger: false
  }

  execute(): string {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 3000)
    return 'Complete'
  }
}
