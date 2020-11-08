export interface Exercise {
  name: string;
  title: string;
  description: string;
  image: string;
  nameSound?: string;
  procedure?: string;
  videos?: Array<string>;
  duration: number;
}

export interface WorkoutPlan {
  name: string;
  title: string;
  exercises: Array<Exercise>;
  restBetweenExercise: number;
  description?: string;
}
