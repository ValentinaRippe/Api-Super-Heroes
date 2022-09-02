import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiHeroes from "../../api";



/* export const searchHeroesAsync = createAsyncThunk(
    'searchHeroes/apiHeroes',
    async (name) => {
        const response = await apiHeroes.get(`search/${name}`);
        // The value we return becomes the `fulfilled` action payload
        return response.data.results;
    }
); */

export const getHeroesAsync = createAsyncThunk(
    'searchHeroes/apiHeroes',
    async (id) => {
        const response = await apiHeroes.get(`${id}`);
        // The value we return becomes the `fulfilled` action payload
       return response.data
    }
);

export const listHeroesSlice = createSlice({
    name: 'listHeroes',
    initialState: {
        data: [],
        dataFilter: []
    },
    reducers: {
        searchHeroes: (state, { payload }) => {
            state.dataFilter = state.data.sort().filter(item => (
                item.name.toLowerCase().includes(payload.toLowerCase())
            ))
        }
    },
    extraReducers: {
        /* [searchHeroesAsync.fulfilled]: (state, { payload }) => {
            state.data = payload;
        }, */
        [getHeroesAsync.fulfilled]: (state, { payload }) => {
            state.data.push(payload);
            state.dataFilter.push(payload);
        },
    }
})


export const { addHeroes, searchHeroes, initialData } = listHeroesSlice.actions;
