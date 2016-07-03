import React, { Component } from 'react';
import style from '../styles/App.css';

class Cell extends Component {

  render() {
    const { x, y, changeGraphXY, current } = this.props;
    const className = current === 0 ? style.cell : style['selected-cell'];
    return <div className={className}
                onClick={ () => changeGraphXY(x, y, current === 0 ? 1 : 0) }></div>
  }

}

export default Cell;
