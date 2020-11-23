import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-workout-description',
  templateUrl: './workout-description.component.html',
  styleUrls: ['./workout-description.component.css']
})
export class WorkoutDescriptionComponent implements OnInit {

  @Input() description: string;
  @Input() steps: string;

  constructor() { }

  ngOnInit() {
  }

}
