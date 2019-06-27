import React from "react";
import { Link } from 'react-router-dom';

export const PokemonIndexItem = (props) => (
  <li>
    <Link to={"./pokemon/" + props.poke.id}>
      <p>{props.poke.name}</p>
      <p><img src={props.poke.image_url} style={{ width: '100px', height: '100px' }}></img></p>
    </Link>
  </li>
);

