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
        dataFilter: [],
        appearance: [
            {"gender":[]},
            {"race":[]},
            {"height":[]},
            {"weight":[]},
            {"eye-color":[]},
            {"hair-color":[]},
        ]
    },
    reducers: {
        searchHeroes: (state, { payload }) => {
            state.dataFilter = state.data.sort().filter(item => (
                item.name.toLowerCase().includes(payload.toLowerCase())
            ))
        },
        orderData: (state, { payload }) => {
            console.log(payload)
            state.dataFilter = payload
        }
    },
    extraReducers: {
        /* [searchHeroesAsync.fulfilled]: (state, { payload }) => {
            state.data = payload;
        }, */
        [getHeroesAsync.fulfilled]: (state, { payload }) => {
            state.appearance[0]["gender"].push(payload.appearance["gender"])
            state.appearance[1]["race"].push(payload.appearance["race"])
            state.appearance[2]["height"].push(payload.appearance["height"][1])
            state.appearance[3]["weight"].push(payload.appearance["weight"][1])
            state.appearance[4]["eye-color"].push(payload.appearance["eye-color"])
            state.appearance[5]["hair-color"].push(payload.appearance["hair-color"])

            state.data = [...state.data, payload].sort((a, b) => a.name > b.name ? 1 : -1);
            state.dataFilter = [...state.dataFilter, payload].sort((a, b) => a.name > b.name ? 1 : -1);
        },
    }
})


export const { addHeroes, searchHeroes, initialData, orderData } = listHeroesSlice.actions;
