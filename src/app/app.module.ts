import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { NgStyleComponent } from './components/ng-style/ng-style.component'
import { CssComponent } from './components/css/css.component'
import { NgClassComponent } from './components/ng-class/ng-class.component'
import { HighlightDirective } from './directives/highlight.directive'
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component'
import { HomeComponent } from './components/home/home.component'

// import { AppRouting } from './app.routes'
import { AppRouting } from './app.routes'
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/user/new-user.component';
import { EditUserComponent } from './components/user/edit-user.component';
import { DetailUserComponent } from './components/user/detail-user.component';
import { NavbarComponent } from './components/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    NgClassComponent,
    HighlightDirective,
    NgSwitchComponent,
    HomeComponent,
    UserComponent,
    NewUserComponent,
    EditUserComponent,
    DetailUserComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, AppRouting],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
