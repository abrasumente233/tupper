import React, { Component } from 'react';
import style from '../styles/App.css';

class KView extends Component {
  render() {
    const { updateK, k } = this.props;
    return <textarea name="k" id="k" className={style['k-view']}
                     onChange={ event => updateK(event.target.value) }
                     value={ k }
    />;
  }
}

export default KView;
