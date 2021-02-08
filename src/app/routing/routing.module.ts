import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoalComponent} from '../goal/goal.component';
import {AboutComponent} from '../about/about.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {path: 'goals', component: GoalComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/goals', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class RoutingModule { }
