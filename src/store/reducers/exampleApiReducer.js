import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const testLoadUsers = createAsyncThunk(
  'apiReducer/testLoadUsers',
  async () => {
    console.log('aca');
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();

      return users;
    } catch (error) {
      console.log(error);
    }
  }
);

export const apiSlice = createSlice({
  name: 'apiReducer',
  initialState: {
    loading: false,
    users: [],
  },
  reducers: {
    loadUsers: (state, action) => {
      state.users = action.payload;
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: {
    [testLoadUsers.pending]: (state) => {
      state.loading = true;
    },

    [testLoadUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },

    [testLoadUsers.rejected]: (state) => {
      state.loading = true;
    },
  },
});

export const { loadUsers, removeUser } = apiSlice.actions;

export default apiSlice.reducer;
