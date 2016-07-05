import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeK, changeGraph } from '../actions/actions';
import GraphView from '../components/GraphView';
import TextView from '../components/TextView';
import style from '../styles/App.css';

class App extends Component {
  render() {
    const { graph, k, dispatch } = this.props;

    return (
      <div>
          <GraphView
            width = {106}
            height = {17}
            canvasWidth = {1060}
            canvasHeight = {170}
            activeColor = {'#df4b26'}
            inactiveColor = {'#ffffff'}
            updateGraph = { graph => dispatch(changeGraph(graph)) }
            graph = {graph}
          />
          <TextView
            name = {'k'}
            update = { value => dispatch(changeK(value)) }
            value = {k}
            style = { style['k-view'] }
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
