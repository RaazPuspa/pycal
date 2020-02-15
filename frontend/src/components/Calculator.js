import React from 'react';

import Key from './Key';
import Display from './Display';

class Calculator extends React.Component {
  constructor() {
    super();

    this.operators = ['+', '-', '×', '÷'];
    this.state = {
      display: '0',
      expression: '',
      isResult: false
    }

    this.onClear = this.onClear.bind(this);
    this.onNumberClick = this.onNumberClick.bind(this)
    this.onOperatorClick = this.onOperatorClick.bind(this)
  }

  onOperatorClick(event) {
    let display = this.state.display
    const operator = event.target.value

    if (this.state.isResult) {
      this.setState({ expression: '', isResult: false });
    }

    // do not allow continuous insertion of substract operator
    if (operator === '-' && display.slice(-1) === '-') {
      return;
    }

    // replace last operator unless trying to put negative sign
    if (operator !== '-' && this.operators.includes(display.slice(-1))) {
      if (this.operators.includes(display.substr(display.length - 3, 1))) {
        return
      }

      display = display.slice(0, -2)
    }

    if (display.length > 0) {
      display += ' '
    }

    this.setState({ display: display += operator })
  }

  onNumberClick(event) {
    let display = this.state.display

    if (this.state.isResult) {
      display = ''
      this.setState({ isResult: false, expression: '' });
    } else if (display === '0') {
      display = ''
    }

    if (display.length > 17) {
      return
    }

    // append a blank character if number is entered just after operator
    if (this.operators.includes(display.slice(-1))
      && !this.operators.includes(display.substr(display.length - 3, 1))) {
      display += ' '
    }

    this.setState({ display: display += event.target.value })
  }

  onClear() {
    let display = this.state.display.slice(0, -1).replace(/\s+$/, '')

    if (this.state.isResult) {
      display = '0'
      this.setState({ isResult: false, expression: '' })
    } else if (display.length === 0) {
      display = '0'
    }

    this.setState({ display })
  }

  onSubmit() {
  }

  render() {
    const rowsKeyMap = [
      [
        {size: 'single', value: '1', type: 'number', onClick: this.onNumberClick},
        {size: 'single', value: '2', type: 'number', onClick: this.onNumberClick},
        {size: 'single', value: '3', type: 'number', onClick: this.onNumberClick},
        {size: 'double', value: 'C', type: 'special', onClick: this.onClear},
      ] ,
      [
        {size: 'single', value: '4', type: 'number', onClick: this.onNumberClick},
        {size: 'single', value: '5', type: 'number', onClick: this.onNumberClick},
        {size: 'single', value: '6', type: 'number', onClick: this.onNumberClick},
        {size: 'single', value: '+', type: 'operator', onClick: this.onOperatorClick},
        {size: 'single', value: '-', type: 'operator', onClick: this.onOperatorClick},
      ],
      [
        {size: 'single', value: '7', type: 'number', onClick: this.onNumberClick},
        {size: 'single', value: '8', type: 'number', onClick: this.onNumberClick},
        {size: 'single', value: '9', type: 'number', onClick: this.onNumberClick},
        {size: 'single', value: '×', type: 'operator', onClick: this.onOperatorClick},
        {size: 'single', value: '÷', type: 'operator', onClick: this.onOperatorClick},
      ],
      [
        {size: 'double', value: '0', type: 'number', onClick: this.onNumberClick},
        {size: 'single', value: '.', type: 'number', onClick: this.onNumberClick},
        {size: 'double', value: '=', type: 'special', onClick: this.onSubmit},
      ]
    ]

    return (
      <div>
        <Display
          display={this.state.display}
          expression={this.state.expression}
        />

      {
        rowsKeyMap.map((keyMap, index) => (
          <div key={index} className="key-row">
            {
              keyMap.map(({size, value, type, onClick}) => (
                <Key
                  key={value}
                  size={size}
                  type={type}
                  value={value}
                  onClick={onClick}
                />
              ))
            }
          </div>
        ))
      }
      </div>
    );
  }
}

export default Calculator;
