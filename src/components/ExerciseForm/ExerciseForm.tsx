import { SyntheticEvent, useState } from "react";

type Props = {};
const ExerciseForm = (props: Props) => {
  const [exerciseName, setExerciseName] = useState<string>('');

  const handleAddExercise = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(exerciseName);
  };

  return (
    <form onSubmit={handleAddExercise}>
      <input value={exerciseName} onChange={e => setExerciseName(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};
export default ExerciseForm;
