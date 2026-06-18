import { createSlice } from "@reduxjs/toolkit";

const LoginModal = createSlice({
  name: "login_modal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = LoginModal.actions;
export default LoginModal.reducer;
