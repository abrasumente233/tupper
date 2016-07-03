import React, { Component } from 'react';
import style from '../styles/App.css';
import Cell from './Cell';

class GraphView extends Component {

  constructor(props) {
    super(props);
  }

  changeGraphXY(x, y, value) {
    const { graph, updateGraph } = this.props;
    let newGraph = graph;
    newGraph[y][x] = value;

    updateGraph(newGraph);
  }

  render() {

    let reactElements = [];

    for (let i = 0; i < 17; i++) {
      let column = [];
      for (let j = 0; j < 106; j++) {
        column[j] = <Cell
          key={i + '-' + j}
          changeGraphXY={this.changeGraphXY.bind(this)}
          x={j} y={i}
          current={this.props.graph[i][j]}
        />
      }
      reactElements.push(<div className={style.row} key={'row-' + i}>{column}</div>);
    }

    return (<div className={style.wrapper}>
      {reactElements}
    </div>);
  }
}

export default GraphView;
