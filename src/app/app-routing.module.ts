import { AllQuesAnsComponent } from './all-ques-ans/all-ques-ans.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { MCQTestPagesComponent } from './mcqtest-pages/mcqtest-pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: FirstPageComponent},
  {path: 'mcq', component : MCQTestPagesComponent},
  {path: 'mcq/allmc', component : AllQuesAnsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 

}
