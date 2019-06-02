import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './components/auth/register/register.component';

const routes: Routes = [
  {
        path: '',
        component: HomeComponent
  },
  {
    path: 'trade',
    loadChildren: 'app/platform/platform.module#PlatformModule'
  }, {
    path: 'admin',
    loadChildren: 'app/components/admin/admin.module#AdminModule'
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
