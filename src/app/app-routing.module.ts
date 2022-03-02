import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component:PortafolioComponent},
  {path:'about',component:AboutComponent},
  {path:'item/:id', component:ItemComponent},
  {path:'search/:termino', component:SearchComponent},
  {path:'portafolio', component:PortafolioComponent},
  {path:'**', pathMatch:'full', redirectTo:'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
