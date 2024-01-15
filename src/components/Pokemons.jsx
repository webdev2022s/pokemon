import { useState } from "react";
import styles from "../components/Pokemon.module.css";

export default function Pokemons() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const reveal = (id) => setSelectedPokemon(id !== selectedPokemon ? id : "");
  return (
    <>
      {Array.from({ length: 1017 }, (_, i) => {
        return (
          <div
            key={i + 1}
            className={styles.Pokemon}
            onClick={() => reveal(i + 1)}
          >
            {i + 1 !== selectedPokemon ? (
              <h1> Who{"'"}s that pokemon?</h1>
            ) : (
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                  i + 1
                }.png`}
                alt="pokemons"
              />
            )}
          </div>
        );
      })}
    </>
  );
}
