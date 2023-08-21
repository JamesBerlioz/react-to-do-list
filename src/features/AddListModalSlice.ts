import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AddListModalState {
  isShown: boolean;
  inputValue: string;
  selectedEmoji: string;
}

const initialState: AddListModalState = {
  isShown: false,
  inputValue: "",
  selectedEmoji: "",
};

export const AddListModalSlice = createSlice({
  name: "addListModal",
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
    changeEmoji: (state, action: PayloadAction<string>) => {
      state.selectedEmoji = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { show, hide, changeValue, changeEmoji } = AddListModalSlice.actions;

export default AddListModalSlice.reducer;
