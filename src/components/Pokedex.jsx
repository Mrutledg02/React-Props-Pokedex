import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({ pokemon }) => {
  return (
    <div className="pokedex">
      <h1 className="pokedex-title">Pokedex</h1>
      <div className="pokedex-grid">
        {pokemon.map(p => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            base_experience={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
