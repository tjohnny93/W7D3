
import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from "./util/api_util";
import { RECEIVE_ALL_POKEMON, receiveAllPokemon } from './actions/pokemon_actions';
import configureStore from "./store/store";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;

  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Alolan Pokedex</h1>, root);
});