import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from './display/display.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewOneComponent } from './view-one/view-one.component';

const routes: Routes = [
  { path: 'pets', component: DisplayComponent },
  { path: 'pets/new', component: AddComponent },
  { path: 'pets/:id', component: ViewOneComponent },
  { path: 'pets/:id/edit', component: EditComponent },
  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/pets' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: DisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
