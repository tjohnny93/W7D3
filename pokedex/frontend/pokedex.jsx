
import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon, fetchPokemon } from "./util/api_util";
import { RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon, receivePokemon, requestPokemon } from './actions/pokemon_actions';
import configureStore from "./store/store";
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.fetchAllPokemon = fetchAllPokemon;
  window.fetchPokemon = fetchPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.receivePokemon = receivePokemon;
  window.requestPokemon = requestPokemon;
  window.selectAllPokemon = selectAllPokemon;

  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={ store } /> , root);
});