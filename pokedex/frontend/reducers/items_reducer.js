import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch (action.type) {
    case RECEIVE_POKEMON:
      nextState = Object.assign({}, state);
      action.entities.pokemon.item_ids.forEach(item_id => {
        nextState[item_id] = action.entities.items[String(item_id)];       
      });
      return nextState;
    default:
      return state;
  }
};

export default itemsReducer;