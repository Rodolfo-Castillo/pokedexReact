import { configureStore } from "@reduxjs/toolkit";
import pokedexReducer from "./pokedex";

export const store = configureStore({
    reducer: {
        pokedex: pokedexReducer,
    },
});
