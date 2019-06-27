import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      debugger
      for (let i = 0; i < action.pokemon.length; i++) {
        nextState[action.pokemon[i].id] = action.pokemon[i];
      }
      return nextState;
    case RECEIVE_POKEMON:
      debugger
      nextState = Object.assign({}, state);
      nextState[action.pokemon.id] = action.pokemon;

      return nextState;
    default:
      return state;
  }
};

export default pokemonReducer;