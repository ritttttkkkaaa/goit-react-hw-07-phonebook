import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsReducer';
import { filtersSlice } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contactsList: contactsSlice.reducer,
    filter: filtersSlice.reducer,
  },
});