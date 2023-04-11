import { useState, useEffect } from "react";
import "../styles/PokeList.css";
import PokemonCard from "./pokemonCard";
import { useDispatch,useSelector } from 'react-redux';
import {listPokemon,getPokemon} from '../store/pokedex/thunk';

const PokeList = () => {
    const [offset, setOffSet] = useState(0);
    const dispatch = useDispatch();
    const pokemonState = useSelector((state) => state.pokedex)
    
    const handleScroll = (e) => {
        if (
            window.innerHeight + e.target.scrollTop - 115 ===
            e.target.scrollHeight
        ) {
            getAllPokemons();
        }
    };
    const getAllPokemons = async () => {
        const response = await dispatch(listPokemon(offset));
        const data = response.payload;
        createPokemonObject(data.results);
        setOffSet(offset + 151);
    };

    const createPokemonObject = (results) => {
        results.forEach(async (pokemon) => {
            dispatch(getPokemon(pokemon.name));
        });
    };

    useEffect(async () => {
        await getAllPokemons();

        //eslint-disable-next-line react-hooks/exhaustive-deps

    }, []);

    return (
        <div className="app-container">
            <div className="pokemon-container">
                <div className="all-container" onScroll={handleScroll}>
                    {pokemonState.pokedexData.map((pokemonStats, i) => (
                        <PokemonCard
                            key={i}
                            id={pokemonStats.id.toString().padStart(3, "0")}
                            image={
                                pokemonStats.sprites.other["official-artwork"]
                                    .front_default
                            }
                            name={pokemonStats.name.replace(/^./, (str) =>
                                str.toUpperCase()
                            )}
                            type={pokemonStats.types[0].type.name}
                            weight={pokemonStats.weight}
                            height={pokemonStats.height}
                            stats={pokemonStats.stats
                                .map((stat) => stat.base_stat)
                                .slice(0, 3)}
                            statsName={pokemonStats.stats
                                .map((stat) => stat.stat.name)
                                .slice(0, 3)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokeList;
