import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';

const routes: Routes = [
  {
        path: '',
        component: HomeComponent
  },
  {
    path: 'platform',
    loadChildren: () => import('app/platform/platform.module').then(m => m.PlatformModule)
  }, {
    path: 'admin',
    loadChildren: () => import('app/components/admin/admin.module').then(m => m.AdminModule)
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
