import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NewuserpageComponent } from './newuserpage/newuserpage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';

const routes: Routes = [
  {path:'', component: MainpageComponent},
  {path:'profilepage', component: ProfilepageComponent},
  {path:'newuserpage', component: NewuserpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
