import { createSlice } from "@reduxjs/toolkit";

export interface AddListModalState {
  isShown: boolean;
}

const initialState: AddListModalState = {
  isShown: false,
};

export const AddListModalSlice = createSlice({
  name: "addListModal",
  initialState,
  reducers: {
    show: (state) => {
      state.isShown = true;
    },
    hide: (state) => {
      state.isShown = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { show, hide } = AddListModalSlice.actions;

export default AddListModalSlice.reducer;
