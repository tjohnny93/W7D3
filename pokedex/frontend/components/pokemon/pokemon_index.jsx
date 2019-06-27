import React from 'react';


class PokemonIndex extends React.Component{
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }
  render() {
    return (
      <ul> 
        {this.props.pokemon.map(poke => (
          <li key={poke.id}>
            <p>{poke.name}</p>
            <p><img src={poke.image_url} style={{width: '100px', height: '100px'}}></img></p>
          </li>
        ))}
      </ul>
    )
  }
}

export default PokemonIndex;