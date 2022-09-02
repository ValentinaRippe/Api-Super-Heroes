import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { listHeroesSlice } from '../features/listHeroes/listHeroesSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    listHeroes: listHeroesSlice.reducer
  },
});

