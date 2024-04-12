import * as React from 'react';

export interface ICalculatorModelProps {
 
}

export const functionBttns = [
  {
      "type": "FUNCTION", "value": "AC"
  },
  {
      "type": "FUNCTION", "value": "DEL"
  }];

export const numericalBttns = [
  {
      "type": "NUMBER", "value": "7"
  },
  {
      "type": "NUMBER", "value": "8"
  },
  {
      "type": "NUMBER", "value": "9"
  },
  {
      "type": "NUMBER", "value": "4"
  },
  {
      "type": "NUMBER", "value": "5"
  },
  {
      "type": "NUMBER", "value": "6"
  },
  {
      "type": "NUMBER", "value": "1"
  },
  {
      "type": "NUMBER", "value": "2"
  },
  {
      "type": "NUMBER", "value": "3"
  },
  {
      "type": "NUMBER", "value": "0"
  },
  {
      "type": "NUMBER", "value": "."
  }
]

export const operationalBttns = [
  {
      "type": "OPERATOR", "value": "Addition", "Symbol": "+"
  },
  {
      "type": "OPERATOR", "value": "Subtraction", "Symbol": "-"
  },
  {
      "type": "OPERATOR", "value": "Multiply", "Symbol": "x"
  },
  {
      "type": "OPERATOR", "value": "Divide", "Symbol": "/"
  },

  {
      "type": "OPERATOR", "value": "Result", "Symbol": "="
  },

];




export default class CalculatorModel extends React.Component<ICalculatorModelProps> {
  // functionButtons = functionBttns;
  // numericalButtons = numericalBttns;
  // operationalButtons = operationalBttns;
  public render() {
    return (
   <div></div>
    );
  }
}
