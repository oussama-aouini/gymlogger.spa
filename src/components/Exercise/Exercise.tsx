import { FC } from 'react';

type Props = {
  exerciseName: string;
};

const Exercise: FC<Props> = ({ exerciseName }: Props): JSX.Element => {
  return <div>{exerciseName}</div>;
};
export default Exercise;

// In TS functions are objects
// FC<Props> is the type of object
// JSX.Element is the return type of the function
// Props is the type of parameters
