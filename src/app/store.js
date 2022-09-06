import { configureStore } from '@reduxjs/toolkit';
import { listHeroesSlice } from '../features/listHeroes/listHeroesSlice'

export const store = configureStore({
  reducer: {
    listHeroes: listHeroesSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});

