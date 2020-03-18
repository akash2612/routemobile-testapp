import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren:() => import ('./admin/admin.module').then(res => res.AdminModule)
  },
  {
    path:'admin',
    loadChildren:() => import ('./admin/admin.module').then(res => res.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
