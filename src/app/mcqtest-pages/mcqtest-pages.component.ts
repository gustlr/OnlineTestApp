import { MCQuestion } from './../../assets/app.model.mcq';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mcqtest-pages',
  templateUrl: './mcqtest-pages.component.html',
  styleUrls: ['./mcqtest-pages.component.css']
})
export class MCQTestPagesComponent implements OnInit {
  mcq: MCQuestion[] = [];

  constructor() {


  }

  ngOnInit(): void {
    this.mcq.push(new MCQuestion("Which of the following replica sets vote in the election of a primary replica set?",
      ["Secondary", "Hidden", "Delayed", "All of the above"], "All of the above"));
    this.mcq.push(new MCQuestion("Which of the following operations on a single document will operate atomically?",
      ["update", "$push", "Both a and b", "None of the above"], "None of the above"))
      this.mcq.push(new MCQuestion("As per the aggregation pipeline optimization concepts, if you have a $sort followed by a $match:",
      ["$match moves before $sort","$sort moves before $match","MongoDB does not do any movements by default and will use the order provided"
    ,"Providing these parameters in any order does not impact the performance"],"$match moves before $sort"))

    console.log(this.mcq[0]);
    this.loadDataInfo()
  }
  i = 0;
  question = null;
  mc: string[] = [];

  loadDataInfo() {
    this.question = this.mcq[this.i].question;
    this.mc = this.mcq[this.i].mChooices;
    
    if (this.i+1 == this.mcq.length){
      console.log("DONE");
    }else{
      this.i++;
    }
  }



}
