import { createAsyncThunk } from "@reduxjs/toolkit";
import { HttpGet } from "../../configs/axios";

export const listPokemon = createAsyncThunk(
    "pokedex/listPokemon",
    async (offset, { dispatch }) => {
        const res = await HttpGet(`?limit=151&offset=${offset}`, dispatch);
        return res;
    }
);

export const getPokemon = createAsyncThunk(
    "pokedex/getPokemon",
    async (name, { dispatch }) => {
        const res = await HttpGet(`/${name}`, dispatch);
        return res;
    }
);
