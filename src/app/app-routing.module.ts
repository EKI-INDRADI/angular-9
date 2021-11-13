import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrListComponent } from './arr-list/arr-list.component';

const routes: Routes = [

  {
    path: 'list',
    children: [{
      path: '', component: ArrListComponent
    }]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
