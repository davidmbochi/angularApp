import { Injectable } from '@angular/core';
import {Goals} from '../goals';
import {Goal} from '../goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  getGoals(): any{
    return Goals;
  }
  getGoal(id): Goal{
    for (const goal of Goals){
      // tslint:disable-next-line:triple-equals
      if (goal.id == id){
        return goal;
      }
    }
  }

  constructor() { }
}
