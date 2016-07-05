import React, { Component } from 'react';
import { RadioGroup, Radio } from 'react-radio-group';

class GraphView extends Component {

  constructor(props) {
    super(props);

    this.cellWidth = props.canvasWidth / props.width;
    this.cellHeight = props.canvasHeight / props.height;
    this.painting = false;

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);

    this.active = true;
  }

  componentDidMount() {
    const canvas = this.refs.graphView,
          ctx    = canvas.getContext('2d');

    this.canvas = canvas;
    this.left = canvas.offsetLeft;
    this.top = canvas.offsetTop;

    this.ctx = ctx;

    this.redraw(this.props.graph);
  }

  componentWillUpdate(nextProps) {
    this.cellWidth = nextProps.canvasWidth / nextProps.width;
    this.cellHeight = nextProps.canvasHeight / nextProps.height;

    this.redraw(nextProps.graph);
  }

  render() {
    const { canvasWidth, canvasHeight } = this.props;
    return (<div>
      <canvas ref="graphView"
              width={canvasWidth} height={canvasHeight}
              onMouseDown={this.handleMouseDown}
              onMouseMove={this.handleMouseMove}
              onMouseUp={ () => this.painting = false }
              onMouseLeave={ () => this.painting = false }>
        Your browser DO NOT support canvas.
      </canvas>
      <RadioGroup name="pen" selectedValue={'active'}
                  onChange={ value => this.active = value === 'active' } >
        <Radio value="active" /> Draw
        <Radio value="inactive" /> Eraser
      </RadioGroup>
    </div>);
  }

  handleMouseDown(e) {
    this.painting = true;

    const positionClicked = this.getMouseXY(e),
          cellCoord       = this.whichCell(positionClicked);

    this.draw(cellCoord, this.active);
    this.issueAChange(cellCoord, this.active);
  }

  handleMouseMove(e) {
    if (this.painting) {
      const positionClicked = this.getMouseXY(e),
            cellCoord       = this.whichCell(positionClicked);

      this.draw(cellCoord, this.active);
      this.issueAChange(cellCoord, this.active);
    }
  }

  draw(cellCoord, value) {
    this.ctx.fillStyle = value ? this.props.activeColor : this.props.inactiveColor;

    const whereToDraw = this.cellPosition(cellCoord);
    this.ctx.fillRect(whereToDraw.x, whereToDraw.y, this.cellWidth, this.cellHeight);
  }

  redraw(graph) {
    for (let x = 0; x < 106; x++) {
      for (let y = 0; y < 17; y++) {
        this.draw({x, y}, graph[x][y]);
      }
    }
  }

  whichCell(mouseCoord) {
    const { x, y } = mouseCoord;
    return {
      x: Math.floor(x / this.cellWidth),
      y: Math.floor(y / this.cellHeight)
    }
  }

  cellPosition(coord) {
    const { x, y } = coord;
    return {
      x: this.cellWidth  * x,
      y: this.cellHeight * y
    }
  }

  getMouseXY(event) {
    return {
      x: event.pageX - this.left,
      y: event.pageY - this.top
    }
  }

  issueAChange(cellCoord, newValue) {
    let newGraph = this.props.graph;
    newGraph[cellCoord.x][cellCoord.y] = newValue;
    this.props.updateGraph(newGraph);
  }

}

export default GraphView;
