import { FC } from "react";

type Props = {};
const Exercise: FC<Props> = (props: Props): JSX.Element => {
  return <div>Exercise</div>;
};
export default Exercise;


// In TS functions are objects
// FC<Props> is the type of object 
// JSX.Element is the return type of the function 
// Props is the type of parameters