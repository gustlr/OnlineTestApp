import { UserAnswers } from './../../assets/app.model.userAnswer';
import { MCQuestion } from './../../assets/app.model.mcq';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mcqtest-pages',
  templateUrl: './mcqtest-pages.component.html',
  styleUrls: ['./mcqtest-pages.component.css']
})
export class MCQTestPagesComponent implements OnInit {
  mcq: MCQuestion[] = [];
 public userAnswers: UserAnswers[] = [];
  public s = 1;
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
  }
  i = 0;
  question = null;
  mc: string[] = [];
  finalMc: string[] =[];
  answer = null;
  userChooice= null;
  isDone:boolean = false;
  done:boolean = true;
  totalPoint = 0;
thisRightAn:boolean;
thisWrongAn:boolean;
score = 0;
  
  loadDataInfo() {
    if(this.question == null){
      this.done = false;
    }
    if (this.i == this.mcq.length){
      this.isDone = true;
      this.done = false;
      for(let i in this.userAnswers){
        console.log(this.userAnswers[i]) ;
      }
      this.caluratePoint(this.userAnswers, this.mcq)
    }else{
        this.question = this.mcq[this.i].question;
  this.mc = this.mcq[this.i].mChooices;
  this.answer = this.mcq[this.i].answer;
  console.log("----------inside loadDate number-------"+this.i);
    }


 }
  storeAnser(an:string){
   
    
    if (this.i == this.mcq.length){
      this.storeUserAnswer(an)
      
      console.log("Done--------------")
    }else{ 
      this.i++;
      console.log("THIS IS THE--- "+this.i+"what ------"+ this.mcq.length);
      this.storeUserAnswer(an)
      console.log(this.userChooice);
    }
 
  }

  
  storeUserAnswer(userAn:string){
    this.userAnswers.push(new UserAnswers(userAn,null));
    console.log(this.userAnswers[this.i]);
    for(let i in this.userAnswers){
      console.log(this.userAnswers[i]) ;
    }
  }

  some(user:string){
    this.userChooice= user;
    console.log(user)
  }
  turnTo(){
  this.isDone == false;
  }
   caluratePoint(userAn:UserAnswers[], an:MCQuestion[] ){
    for (const i in an) {
      if (Object.prototype.hasOwnProperty.call(an, i)) {
        if(userAn[i].userAnswer == an[i].answer){
          this.finalMc = this.mcq[i].mChooices;
          userAn[i].isCorret = true;
          console.log(userAn[i].isCorret )
          this.totalPoint++
          this.score = (this.totalPoint/this.mcq.length) *100
        }
        
      }
    }
   }
   colorRightAn(mc: string){
    for(let i in this.userAnswers){
    
         if (mc == this.mcq[i].answer ){
        //this.thisRightAn = true;
     return true;
      }
    }
   }
   colorUserAn(mc: string){
    for(let i of this.userAnswers){
    
         if (mc == i.userAnswer ){
        //this.thisRightAn = true;
     return true;
      }
    }
   }


}
