import { createSlice } from "@reduxjs/toolkit";
import initialAssignments from "../../Database/assignments.json"; // or wherever your initial data is

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState: initialAssignments, // array of assignment objects
  reducers: {
    addAssignment: (state, action) => {
      state.push(action.payload);
    },
    deleteAssignment: (state, action) => {
      return state.filter((assignment) => assignment._id !== action.payload);
    },
    updateAssignment: (state, action) => {
      const index = state.findIndex((a) => a._id === action.payload._id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;