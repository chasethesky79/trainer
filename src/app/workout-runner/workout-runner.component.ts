import { Component, OnInit } from '@angular/core';
import { WorkoutPlan, Exercise } from '../../models/exercise';
import { WorkoutService } from '../service/workout.service';

@Component({
    selector: 'app-workout-runner',
    templateUrl: './workout-runner.component.html',
    styleUrls: ['./workout-runner.component.css'],
})
export class WorkoutRunnerComponent implements OnInit {
    workout: WorkoutPlan;
    restExercise: Exercise;
    currentExercise: Exercise;
    currentExerciseIndex = 0;
    count: number;
    constructor(private workoutService: WorkoutService) {}

    ngOnInit() {
        this.workout = this.workoutService.buildWorkout();
        this.restExercise = this.workoutService.buildRestExercise(this.workout.restBetweenExercise);
        this.start();
    }

    start() {
        const workoutTimeRemaining = this.workoutService.getTotalWorkoutDuration(this.workout);
        this.startExercise(this.workout.exercises[this.currentExerciseIndex]);
    }

    startExercise(exercise: Exercise) {
        this.currentExercise = exercise;
        this.count = 0;
        const intervalId = setInterval(() => {
            if (this.count < exercise.duration) {
                this.count++;
            } else {
                clearInterval(intervalId);
                this.currentExerciseIndex++;
                if (this.currentExerciseIndex < this.workout.exercises.length) {
                  this.startExercise(this.workout.exercises[this.currentExerciseIndex]);
                }
            }
        }, 1000);
    }
}
