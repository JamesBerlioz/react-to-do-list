import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

interface List {
  id: string;
  title: string;
  todos: string[];
}

export interface DataState {
  data: List[];
  dataIsEmpty: boolean;
}

const initialState: DataState = {
  data: [],
  dataIsEmpty: true,
};

export const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addTitle: (state, action: PayloadAction<string>) => {
      state.data = [
        ...state.data,
        { id: v4(), title: action.payload, todos: [] },
      ];
      console.log(state.data);
    },
    removeTitle: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((list) => list.id !== action.payload);
    },
    dataIsEmpty: (state) => {
      state.data.length === 0
        ? (state.dataIsEmpty = true)
        : (state.dataIsEmpty = false);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTitle, removeTitle } = DataSlice.actions;

export default DataSlice.reducer;
