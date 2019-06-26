import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      for (let i = 0; i < action.pokemon.length; i++) {
        nextState[i] = action.pokemon[i];
      }
      return nextState;
    default:
      return state;
  }
};


export default pokemonReducer;