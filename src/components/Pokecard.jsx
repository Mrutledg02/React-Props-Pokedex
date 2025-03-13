import './Pokecard.css';

const Pokecard = ({ name, id, type, base_experience }) => {
  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="pokecard">
      <h3 className="pokecard-name">{name}</h3>
      <img src={imageSrc} alt={name} />
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
};

export default Pokecard;
