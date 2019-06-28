import { connect } from 'react-redux';
import { selectPokemon } from '../../reducers/selectors';
import { requestPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from "./pokemon_detail";

const mapStateToProps = state => ({
  entities: selectPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestPokemon: (id) => dispatch(requestPokemon(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
