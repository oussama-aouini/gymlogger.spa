export enum Muscle {
  Chest = "Chest",
  Biceps = "Biceps",
  Triceps = "Triceps",
  FrontDelt = "FrontDelt",
  LateralDelts = "LateralDelts",
  RearDelts = "RearDelts",
  Quadriceps = "Quadriceps",
  Hamstrings = "Hamstrings",
  Glutes = "Glutes",
}

export interface ExerciseDto {
  int: string;
  name: string;
  Muscles: Muscle[];
}