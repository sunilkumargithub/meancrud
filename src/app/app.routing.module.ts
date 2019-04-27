import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import {EditEmployeeComponent} from './update/editemployee/editemployee.component';
const appRoutes: Routes = [

  {path: 'create', component: CreateComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'delete', component: DeleteComponent},
  {path: 'editemployee', component: EditEmployeeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]

})

export class AppRoutingModule {




}
