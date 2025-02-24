import { ChangeEvent, useState, SyntheticEvent } from 'react';
import { ExerciseDto } from '../../gym';
import { searchExercises } from '../../api';
import Exercise from '../Exercise/Exercise';

type Props = {};
const ExerciseList = (props: Props) => {
  const [search, setSearch] = useState<string>('');
  // allways inzilise state with a value or you will get undefined errors
  const [exercises, setExercises] = useState<ExerciseDto[]>([]);
  const [serverError, setServerError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const handleClick = async (e: SyntheticEvent) => {
    // hover over result to see its type
    const result = await searchExercises();
    // this is typenarrowing meaning doing different things depending on the return type
    // we do it when the server reponse can be of different types
    if (typeof result === 'string') {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setExercises(result.data);
    }
  };

  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)} />
      <button onClick={(e) => handleClick(e)}>Get Exercises</button>
      {serverError && <h1>{serverError}</h1>}
      {exercises.length > 1 ? (
        <ul>
          {exercises.map((exercise) => {
            return (
              <li key={exercise.id}>
                <Exercise key={exercise.id} exerciseName={exercise.name} />
              </li>
            );
          })}
        </ul>
      ) : (
        <h1>No exercises</h1>
      )}
    </div>
  );
};
export default ExerciseList;

// to get the type of event hover the cursor over the e passed in the event handler prop
// if the type doesn't work use SyntheticEvent it is like the base class for all events
