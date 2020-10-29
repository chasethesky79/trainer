export interface Exercise {
  name: string;
  title: string;
  description: string;
  image: string;
  nameSound?: string;
  procedure?: string;
  videos?: Array<string>;
}

export interface ExercisePlan {
  exercise: Exercise;
  duration: number;
}

export interface WorkoutPlan {
  name: string;
  title: string;
  exercises: Array<ExercisePlan>;
  restBetweenExercise: number;
  description?: string;
}
