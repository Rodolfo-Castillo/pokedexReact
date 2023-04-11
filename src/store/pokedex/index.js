import { createSlice } from "@reduxjs/toolkit";
import { listPokemon, getPokemon } from "./thunk";

const initialState = {
    pokedexData: [],
    pokemonNames: [],
    error: false,
    loading: false,
};

const pokedexSlice = createSlice({
    name: "pokedex",
    initialState,
    extraReducers: {
        [listPokemon.pending]: (state) => {
            state.loading = true;
        },
        [listPokemon.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.pokemonNames = [...state.pokemonNames, payload.results];
        },
        [getPokemon.pending]: (state) => {
            state.loading = true;
        },
        [getPokemon.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.pokedexData = [...state.pokedexData, payload];
            let data = state.pokedexData;

            data.sort((a, b) => {
                return a.id - b.id;
            });

            state.pokedexData = data;
        },
    },
});

export default pokedexSlice.reducer;
