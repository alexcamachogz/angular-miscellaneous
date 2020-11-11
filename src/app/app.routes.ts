import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const AppRouting = RouterModule.forRoot(ROUTES)
