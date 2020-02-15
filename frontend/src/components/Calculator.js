import React from 'react';

import Key from './Key';
import Display from './Display';

class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      display: '0',
      expression: ''
    }
  }

  onOperatorClick(event) {
  }

  onNumberClick(event) {
  }

  onClear() {
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
