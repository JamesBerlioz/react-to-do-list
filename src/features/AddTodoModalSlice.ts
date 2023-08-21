import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AddTodoModalState {
  isShown: boolean;
  inputValue: string;
}

const initialState: AddTodoModalState = {
  isShown: false,
  inputValue: "",
};

export const AddTodoModalSlice = createSlice({
  name: "addTodoModal",
  initialState,
  reducers: {
    show: (state) => {
      state.isShown = true;
      state.inputValue = "";
    },
    hide: (state) => {
      state.isShown = false;
    },
    changeValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { show, hide, changeValue } = AddTodoModalSlice.actions;

export default AddTodoModalSlice.reducer;
