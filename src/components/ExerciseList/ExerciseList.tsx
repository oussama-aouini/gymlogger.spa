import { ChangeEvent, useState, SyntheticEvent } from "react";

type Props = {};
const ExerciseList = (props: Props) => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const handleClick = (e: SyntheticEvent) => {};

  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)} />
      <button onClick={(e) => handleClick(e)} />
    </div>
  );
};
export default ExerciseList;

// to get the type of event hover the cursor over the e passed in the event handler prop
// if the type doesn't work use SyntheticEvent it is like the base class for all events 
