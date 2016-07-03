import { combineReducers } from 'redux';
import { CHANGE_GRAPH_STATE } from '../actions/actions';
import { DEFAULT_K, DEFAULT_GRAPH } from '../convert';

const initialGraphState = {
  graph: DEFAULT_GRAPH,
  k: DEFAULT_K
};

function graphState(state = initialGraphState, action) {
  switch (action.type) {
    case CHANGE_GRAPH_STATE:
          return {k: action.k, graph: action.graph};
    default:
          return state;
  }
}

const cyp = combineReducers({graphState});

export default cyp;
