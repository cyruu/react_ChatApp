import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    sendMessage: (state, action) => {
      let date = new Date();
      let hrs = date.getHours();
      let mins = date.getMinutes();
      const msg = {
        sentBy: action.payload.sentBy,
        text: action.payload.text,
        time: hrs + ":" + mins,
        showTime: false,
        id: Date.now(),
      };
      state.messages.push(msg);
    },
    updateShowTime: (state, action) => {
      console.log(state.messages);
      //   state.messages = state.messages.map((msg) => {
      //     if (action.payload.id == msg.id) {
      //       return {
      //         ...msg,
      //         showTime: !showTime,
      //       };
      //     } else {
      //       return {
      //         ...msg,
      //       };
      //     }
      //   });
    },
  },
});

export default slice.reducer;
export const { sendMessage, updateShowTime } = slice.actions;
