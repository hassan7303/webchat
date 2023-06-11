import { configureStore, createSlice } from "@reduxjs/toolkit";
const userslice = createSlice({
  name: "user",
  initialState: {
    userName: {},
    Password: {},
    messageSend: {},
  },
  reducers: {
    userName: (state, action) => {
      state.userName = action.payload.userName;
    },
    Password: (state, action) => {
      state.Password = action.payload.Password;
    },
    messageSend:(state,action)=>{
        state.messageSend = action.payload.messageSend
    }
  },
});
export const {userName,Password,messageSend} = userslice.actions
export const Store = configureStore({
    reducer:{
        user:userslice.reducer
    }
})