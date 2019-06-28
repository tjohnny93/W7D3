import React from 'react';
import { PokemonIndexItem } from "./pokemon_index_item";
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component{
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }
  
  render() {
    return (
      <div>
        <ul> 
          {this.props.pokemon.map(poke => (
            <PokemonIndexItem poke={poke} key={poke.id}/>
          ))}
        </ul>

      </div>
    )
  }
}

export default PokemonIndex;