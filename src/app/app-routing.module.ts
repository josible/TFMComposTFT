import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './views/home/home.component';
import { DashboardComponent} from './views/dashboard/dashboard.component';
import { DesignerComponent} from './views/designer/designer.component';
import { LoginComponent} from './views/login/login.component';
import { RegisterComponent} from './views/register/register.component';
import { LearnComponent} from './views/learn/learn.component';
const routes: Routes = [
  { path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'designer',component:DesignerComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'learn',component:LearnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,DashboardComponent,DesignerComponent,LoginComponent,RegisterComponent,LearnComponent]
