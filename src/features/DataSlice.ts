import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export interface List {
  id: string;
  title: string;
  emoji: string;
  todos: { text: string; completed: boolean }[];
}

interface addTodoTypes {
  id: string;
  text: string;
}

interface completeTodoTypes {
  id: string;
  index: number;
}

export interface DataState {
  data: List[];
  noList: boolean;
}

const initialState: DataState = {
  data: JSON.parse(window.localStorage.getItem("data") || "[]"),
  noList: false,
};

export const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addTitle: (state, action: PayloadAction<{ title: string; emoji: string }>) => {
      state.data = [
        ...state.data,
        { id: v4(), title: action.payload.title, emoji: action.payload.emoji, todos: [] },
      ];
    },
    removeTitle: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((list) => list.id !== action.payload);
      if (state.data.length === 0) state.noList = true;
    },
    addTodo: (state, action: PayloadAction<addTodoTypes>) => {
      state.data = state.data.map((list) =>
        list.id === action.payload.id
          ? {
              ...list,
              todos: [...list.todos, { text: action.payload.text, completed: false }],
            }
          : list
      );
    },
    completeTodo: (state, action: PayloadAction<completeTodoTypes>) => {
      state.data = state.data.map((list) =>
        list.id === action.payload.id
          ? {
              ...list,
              todos: list.todos.map((todo, i) =>
                i === action.payload.index
                  ? {
                      ...todo,
                      completed: !todo.completed,
                    }
                  : todo
              ),
            }
          : list
      );
    },
    removeTodo: (state, action: PayloadAction<completeTodoTypes>) => {
      state.data = state.data.map((list) =>
        list.id === action.payload.id
          ? {
              ...list,
              todos: list.todos.filter((todo, i) => i !== action.payload.index),
            }
          : list
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTitle, removeTitle, addTodo, completeTodo, removeTodo } = DataSlice.actions;

export default DataSlice.reducer;
