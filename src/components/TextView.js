import React, { Component } from 'react';

class TextView extends Component {
  render() {
    const { update, value, name, style } = this.props;
    return <textarea name={ name } id={ name } className={ style }
                     onChange={ event => update(event.target.value) }
                     value={ value }
    />;
  }
}

export default TextView;
