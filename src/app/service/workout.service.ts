import { Injectable } from '@angular/core';
import { Exercise, WorkoutPlan } from '../../models/exercise';

@Injectable()
export class WorkoutService {
    constructor() {}

    buildWorkout(): WorkoutPlan {
        return {
            name: '7MinuteWorkout',
            title: '7 Minute Workout',
            exercises: [
                {
                    name: 'jumpingJacks',
                    title: 'Jumping Jacks',
                    description: 'Jumping Jacks is a physical jumping exercise',
                    image: 'JumpingJacks.png',
                    nameSound: 'jumpingjacks.wav',
                    procedure: 'Assume an erect position, with feet together and arms at your side...',
                    videos: ['dmYwZH_BNd0', 'BABOdJ-2Z60'],
                    duration: 30,
                },
                {
                    name: 'wallSit',
                    title: 'Wall Sit',
                    description: 'A wall sit, also known as a Roman Chair, is an exercise done to strengthen the quadriceps muscles.',
                    image: 'wallsit.png',
                    nameSound: 'wallsit.wav',
                    procedure: 'Place your back against a wall with your feet shoulder width apart and a little ways out from the wall',
                    videos: ['y-wV4Venusw', 'MMV3v4ap4ro'],
                    duration: 50,
                },
                {
                    name: 'pushUp',
                    title: 'Push up',
                    description:
                        'A push-up is a common exercise performed in a prone position by raising and lowering the body using the arms',
                    image: 'Pushup.png',
                    nameSound: 'pushups.wav',
                    procedure: 'Lie prone on the ground with hands placed as wide or slightly wider than shoulder width',
                    videos: ['Eh00_rniF8E', 'ZWdBqFLNljc', 'UwRLWMcOdwI', 'ynPwl6qyUNM', 'OicNTT2xzMI'],
                    duration: 70,
                },
            ],
            restBetweenExercise: 70,
            description: 'Ultimate fat burner workout plan',
        } as WorkoutPlan;
    }

    buildRestExercise(restBetweenExercise: number): Exercise {
        return {
            name: 'rest',
            title: 'Relax',
            description: 'Relax a bit',
            image: 'rest.png',
            duration: restBetweenExercise,
        };
    }

    getTotalWorkoutDuration(workoutPlan: WorkoutPlan) {
        return workoutPlan.exercises.reduce((a, b) => a + (b.duration || 0), 0);
    }
}
