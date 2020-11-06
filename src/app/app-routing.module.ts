import { FirstPageComponent } from './first-page/first-page.component';
import { MCQTestPagesComponent } from './mcqtest-pages/mcqtest-pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: FirstPageComponent},
  {path: 'mcq', component : MCQTestPagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 

}
