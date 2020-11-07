import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MCQTestPagesComponent } from './mcqtest-pages/mcqtest-pages.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { AllQuesAnsComponent } from './all-ques-ans/all-ques-ans.component';

@NgModule({
  declarations: [
    AppComponent,
    MCQTestPagesComponent,
    FirstPageComponent,
    AllQuesAnsComponent
    
  ],
  exports: [MCQTestPagesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
