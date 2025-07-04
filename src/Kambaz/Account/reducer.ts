// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   currentUser: {
//     _id: "123",
//     username: "iron_man",
//     role: "FACULTY",
//     firstName: "Demo",
    
//     lastName: "User",
//     email: "demo@domain.com",
//   },
// };
// const accountSlice = createSlice({
//   name: "account",
//   initialState,
//   reducers: {
//     setCurrentUser: (state, action) => {
//       state.currentUser = action.payload;
//     },
//   },
// });
// export const { setCurrentUser } = accountSlice.actions;
// export default accountSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;