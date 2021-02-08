import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Goal} from '../goal';
import {ActivatedRoute} from '@angular/router';
import {GoalService} from '../goal-service/goal.service';



@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  goal: Goal;
  constructor(private route: ActivatedRoute, private service: GoalService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.goal = this.service.getGoal(id);
  }

}
