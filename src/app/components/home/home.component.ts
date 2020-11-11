import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  template: `<app-ng-style></app-ng-style>

    <hr class="mt-5" />
    <app-css></app-css>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sed
      repellat magni illum provident maxime quae cupiditate laudantium sint!
      Quis voluptatum enim fuga a architecto hic.
    </p>

    <hr class="mt-5" />
    <app-ng-class></app-ng-class>

    <hr class="mt-5" />
    <h3>Custom directives</h3>
    <p [appHighlight]="'orange'">Hola Mundo</p>

    <hr class="mt-5" />
    <app-ng-switch></app-ng-switch>`,
  styleUrls: ['./home.component.styl']
})
export class HomeComponent {}
