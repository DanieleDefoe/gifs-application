import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: { values: {}, errors: {}, isValid: false },
  reducers: {
    setInitialValues(state, action) {
      state.values = { ...state.values, ...action.payload };
    },
    handleChange(state, action) {
      const { name, validationMessage, value, isValid } = action.payload;
      state.values[name] = value;
      state.errors[name] = validationMessage;
      state.isValid = isValid;
    },
    resetForm(state) {
      state.values = {};
      state.errors = {};
      state.isValid = false;
    },
    validateForm(state) {
      state.isValid = true
    }
  }
});

export const { handleChange, resetForm, setInitialValues, validateForm } = formSlice.actions;
export default formSlice.reducer;
