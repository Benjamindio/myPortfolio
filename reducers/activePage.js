import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: "Accueil",
};

export const activeSectionSlice = createSlice({
 name: 'activePage',

  initialState,
 reducers: {
   changeSection: (state, action) => {
     state.value = action.payload;
     
   },
 },
});

export const { changeSection } = activeSectionSlice.actions;
export default activeSectionSlice.reducer;