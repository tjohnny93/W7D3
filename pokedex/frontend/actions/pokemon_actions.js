import * as APIUtil from "../util/api_util";

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"; 
export const RECEIVE_POKEMON = "RECEIVE_POKEMON"; 

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemon = entities => {
  return ({
  type: RECEIVE_POKEMON,
  entities
})};

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestPokemon = (id) => (dispatch) => (
  APIUtil.fetchPokemon(id)
    .then(entities => dispatch(receivePokemon(entities)))
)
