import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      for (let i = 0; i < action.pokemon.length; i++) {
        nextState[action.pokemon[i].id] = action.pokemon[i];
      }
      return nextState;
    case RECEIVE_POKEMON:
      nextState = Object.assign({}, state);
      nextState[action.entities.pokemon.id] = action.entities.pokemon;
      return nextState;
    default:
      return state;
  }
};

export default pokemonReducer;