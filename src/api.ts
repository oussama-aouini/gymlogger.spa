import axios from "axios";
import { ExerciseDto } from "./gym";

interface searchResponse {
  data: ExerciseDto[];
}

export const searchExercises = async () => {
  try {
    const data = await axios.get<searchResponse>(
      `${import.meta.env.VITE_BASE_URL}/api/exercise`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error has occured.";
    }
  }
};
