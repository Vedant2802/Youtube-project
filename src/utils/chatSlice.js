import { createSlice } from "@reduxjs/toolkit";
// import { OFFSET_LIVE_CHAT } from "../Constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload); //push the newly added messages to the redux store
      // state.messages.splice(OFFSET_LIVE_CHAT, 1);
      // state.messages.unshift(action.payload); // To push the newly added message from the first
    },
  },
});

export default chatSlice.reducer;
export const { addMessage } = chatSlice.actions;