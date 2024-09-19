import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchTodos = createAsyncThunk("todos/fetchtodos", async function () {
  var res = await fetch("http://localhost:3000/todos");
  var json = await res.json();
  return json;
});

const asyncUpdateTodos = createAsyncThunk(
  "todos/updateTodos",
  async function ({ id, body }) {
    var res = await fetch("http://localhost:3000/todos/" + id, {
      method: "put",
      body: JSON.stringify({ ...body, status: !body.status }),
    });
    var json = await res.json();
    return json;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ todo: action.payload, status: false });
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.todo !== action.payload.todo);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state = action.error.message;
      return state;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
    builder.addCase(asyncUpdateTodos.fulfilled, (state, action) =>
      state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      )
    );
  },
});

export default todosSlice.reducer;
export const todosActions = {
  ...todosSlice.actions,
  fetchTodos,
  asyncUpdateTodos,
};
