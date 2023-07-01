import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: 'form',
  initialState: { values: {}, errors: {}, isValid: false },
  reducers: {
    handleChange(state, action) {
      const { name, value, validationMessage, closest } = action.payload
      state.values[name] = value
      state.errors[name] = validationMessage
      state.isValid = closest('form').checkValidity()
    },
    resetForm(state) {
      state.values = {}
      state.errors = {}
      state.isValid = false
    },
  },
})

export const { handleChange, resetForm } = formSlice.actions
export default formSlice.reducer
