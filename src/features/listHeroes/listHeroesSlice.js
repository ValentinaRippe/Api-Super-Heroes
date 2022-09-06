import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiHeroes from "../../api";


export const getHeroesAsync = createAsyncThunk(
    'searchHeroes/apiHeroes',
    async (dispatch) => {
        const res = await apiHeroes.get(`all.json`);
        // The value we return becomes the `fulfilled` action payload
        dispatch(getHeroes(res.data))
        return res.data
    }
);


export const listHeroesSlice = createSlice({
    name: 'listHeroes',
    initialState: {
        data: [],
        dataFilter: [],
        load: false,
        currentPages: 0,
        appearance: [
            { "gender": [] },
            { "race": [] },
            { "height": [] },
            { "weight": [] },
            { "eyeColor": [] },
            { "hairColor": [] },
        ],
        order: {
            sort: '',
            filter: ''
        }
    },
    reducers: {
        getHeroes: (state, { payload }) => {
            state.currentPages = 0
            state.load = false
            state.data = payload
            state.dataFilter = payload
            state.load = true
        },
        searchHeroes: (state, { payload }) => {
            state.currentPages = 0
            state.load = false
            state.dataFilter = state.data.filter((item) =>
                item.name.toLowerCase().includes(payload.toLowerCase()))
            state.load = true
        },
        orderData: (state, { payload }) => {
            state.currentPages = 0
            state.load = false
            state.dataFilter = payload
            state.load = true
        },
        curPages: (state, {payload})=>{
            state.currentPages = payload
        },
        selectFilter: (state, { payload }) => {
            state.order.sort = ''
            state.order.filter = payload
        },
        selectSort: (state, { payload }) => {
            state.order.sort = payload
        },
        resetState: (state) => {
            state.currentPages = 0
            state.order = {
                sort: '',
                filter: ''
            }
            state.dataFilter = state.data
        },
    },
    extraReducers: {
        [getHeroesAsync.fulfilled]: (state, { payload }) => {
            payload.map(pay => {
                state.appearance[0]["gender"].push(pay.appearance["gender"])
                state.appearance[1]["race"].push(pay.appearance["race"])
                state.appearance[2]["height"].push(pay.appearance["height"][1])
                state.appearance[3]["weight"].push(pay.appearance["weight"][1])
                state.appearance[4]["eyeColor"].push(pay.appearance["eyeColor"])
                state.appearance[5]["hairColor"].push(pay.appearance["hairColor"])
                return payload
            })
        }
    }
})


export const { searchHeroes, getHeroes, orderData, selectFilter, selectSort, resetState, curPages } = listHeroesSlice.actions;
