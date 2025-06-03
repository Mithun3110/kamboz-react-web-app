import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/Assignments/reducer";
import coursesReducer from "./Courses/reducer";
import enrollmentReducer from "./enrollmentReducer"
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignments: assignmentReducer,
    courses: coursesReducer,
    enrollmentReducer: enrollmentReducer, 
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

