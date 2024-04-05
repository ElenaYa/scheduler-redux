import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchTasks } from './operations';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchTasks.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    })
    .addCase(fetchTasks.rejected, (state, action) => {
      state.isLoading =false;
      state.error = action.payload;
    });
      },
  });
   

export const tasksReducer = tasksSlice.reducer;
