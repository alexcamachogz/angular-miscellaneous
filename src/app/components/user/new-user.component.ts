import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-new-user',
  template: ` <p>new-user works!</p> `
})
export class NewUserComponent {
  constructor(private route: ActivatedRoute) {
    this.route.parent.params.subscribe((params) => {
      console.log('Ruta hija - new user')
      console.log(params)
    })
  }
}
