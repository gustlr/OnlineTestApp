import { MCQTestPagesComponent } from './../mcqtest-pages/mcqtest-pages.component';
import { UserAnswers } from './../../assets/app.model.userAnswer';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-all-ques-ans',
  templateUrl: './all-ques-ans.component.html',
  styleUrls: ['./all-ques-ans.component.css']
})

export class AllQuesAnsComponent implements OnInit {

  
  constructor(private mcqtest:MCQTestPagesComponent) { 
    
  }

  ngOnInit(): void {
    console.log(this.mcqtest)
  }
  some(){
    console.log(this.mcqtest.s) ;
  }

}
