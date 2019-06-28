import React from 'react';


class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.pokeId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.pokeId !== prevProps.match.params.pokeId ) {
      this.props.requestPokemon(this.props.match.params.pokeId);
    }
  }

  render() {
    debugger
    if (!this.props.entities) return null;
  
    let { pokemon, items } = this.props.entities;
    pokemon = pokemon[this.props.match.params.pokeId];
    return (
      <div>
        <h1>{pokemon.name}</h1>
        <p>ID {pokemon.id}</p>
        <p><img src={"/assets/" + pokemon.image_url} style={{ width: '300px', height: '300px' }}></img></p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        <p>Types: {pokemon.poke_type}</p>
        <ul><h1>Moves:</h1> 
          {pokemon.moves.map(move => (
            <li key={move}>{move}</li>
          ))}
        </ul>
        <ul><h1>Items:</h1>
          {pokemon.item_ids.map(item_id => (
            <li key={"item" + item_id}>
              <p>{item_id}</p>
              <p>{items[item_id].name}</p>
              <p>Price: {items[item_id].price}</p>
              <p>Happiness: {items[item_id].happiness}</p>
              <img src={items[item_id].image_url} style={{ width: '75px', height: '75px' }}></img>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;