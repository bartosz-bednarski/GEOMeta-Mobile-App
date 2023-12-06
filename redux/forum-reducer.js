import { createSlice } from "@reduxjs/toolkit";
const forumInitialState = {
  update: false,
};

const forumSlice = createSlice({
  name: "Forum",
  initialState: forumInitialState,
  reducers: {
    updateData: (state) => {
      state.update = true;
    },
    dataUpdated: (state) => {
      state.update = false;
    },
  },
});

export const updateData = forumSlice.actions.updateData;
export const dataUpdated = forumSlice.actions.dataUpdated;
export default forumSlice.reducer;
