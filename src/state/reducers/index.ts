
import { combineReducers } from "redux";
import repositoriesReducer from "./respositoriesReducer";

const reducers = combineReducers({
  respositories: repositoriesReducer
})

export default reducers;

export type RootState = ReturnType<typeof reducers>


