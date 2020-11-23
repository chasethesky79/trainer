import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutRunnerRoutingModule } from './workout-runner-routing.module';
import { WorkoutRunnerComponent } from './workout-runner.component';
import { WorkoutService } from '../service/workout.service';
import { WorkoutDescriptionComponent } from './workout-description/workout-description.component';

@NgModule({
    imports: [CommonModule, WorkoutRunnerRoutingModule],
    exports: [WorkoutRunnerComponent, WorkoutDescriptionComponent],
    declarations: [WorkoutRunnerComponent, WorkoutDescriptionComponent],
    providers: [WorkoutService],
})
export class WorkoutRunnerModule {}
