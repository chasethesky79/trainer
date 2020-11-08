import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutRunnerRoutingModule } from './workout-runner-routing.module';
import { WorkoutRunnerComponent } from './workout-runner.component';
import { WorkoutService } from '../service/workout.service';

@NgModule({
    imports: [CommonModule, WorkoutRunnerRoutingModule],
    exports: [WorkoutRunnerComponent],
    declarations: [WorkoutRunnerComponent],
    providers: [WorkoutService],
})
export class WorkoutRunnerModule {}
