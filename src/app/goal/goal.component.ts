import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';
import {GoalService} from '../goal-service/goal.service';
import {Quote} from '../quote-class/quote';
import {HttpClient} from '@angular/common/http';
import {AlertService} from '../alert-service/alert.service';
import {QuoteRequestService} from '../quote-http/quote-request.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[];
  alertService: AlertService;
  quote: Quote;
  // tslint:disable-next-line:typedef
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  // tslint:disable-next-line:typedef
  completeGoal(isComplete, index){
    this.goals.splice(index, 1);
  }
  goToUrl(id): any{
    this.router.navigate(['/goals', id]);
  }
  // tslint:disable-next-line:typedef
  deleteGoal(index){
      const toDelete = confirm(`are you sure you want to delete ${this.goals[index].name}?`);
      if (toDelete){}
      this.goals.splice(index, 1);
      this.alertService.alertMe('The goal has been deleted');
  }
  // tslint:disable-next-line:typedef
  addNewGoal(goal){
    const goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }

  // tslint:disable-next-line:max-line-length
  constructor(goalService: GoalService, alertService: AlertService, private http: HttpClient, private quoteService: QuoteRequestService, private router: Router) {
    this.goals = goalService.getGoals();
    this.alertService = alertService;
  }

  ngOnInit(): void {
    this.quoteService.quoteRequest();
    this.quote = this.quoteService.quote;
  }

}
