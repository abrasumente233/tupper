import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeK, changeGraph } from '../actions/actions';
import GraphView from '../components/GraphView';
import KView from '../components/KView';

class App extends Component {
  render() {
    const { graph, k, dispatch } = this.props;
    
    return (
      <div>
          <GraphView
            updateGraph = { graph => dispatch(changeGraph(graph)) }
            graph = {graph}
          />
          <KView
            updateK = { k => dispatch(changeK(k)) }
            k = {k}
          />
      </div>
    )
  }
}

function select(state) {
  return {
    graph: state.graphState.graph,
    k: state.graphState.k
  }
}

export default connect(select)(App);
