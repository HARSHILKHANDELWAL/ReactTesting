import * as React from 'react';

export interface ICalulatorServiceProps {
}

export  function evaluateExpressionUsingEval( expression: string): string {

    try {
      // Use a regular expression to tokenize the expression
      const tokens = expression.match(/[+\-x/()]|\d+\.\d+|\d+/g);
      console.log(tokens)
      console.log(tokens?.[0])

      if (!tokens) {
        throw new Error('Invalid expression');
      }

      const output: number[] = [];
      const operators: string[] = [];

      const precedence: { [key: string]: number } = {
        '+': 1,
        '-': 1,
        'x': 2,
        '/': 2,
      };

      for (const token of tokens) {
        console.log(/\d/.test(token))


        if (/\d/.test(token)) {
          console.log(parseFloat(token), "Parse token")
          output.push(parseFloat(token));
          console.log(output, "Output Array");
        } else if ('+-x/'.includes(token)) {
          console.log(precedence[operators[operators.length - 1]], "all");
          console.log(precedence[token], "half")
          while (
            operators.length &&
            precedence[operators[operators.length - 1]] >= precedence[token]
          ) {
            applyOperator(output, operators.pop()!);
          }
          operators.push(token);
          console.log(operators, "Operator Array")
        }
      }


      while (operators.length) {
        applyOperator(output, operators.pop()!);
      }

      if (output.length !== 1 || operators.length !== 0) {
        throw new Error('Invalid expression');
      }

      return output[0].toString();
    } catch (error) {
      console.error('Error evaluating expression:');
      return "Invalid";
    }
  }

  function applyOperator(output: number[], operator: string): void {
    const b = output.pop()!;
    const a = output.pop()!;
    console.log(a, "appOPra")
    console.log(b, "appOPra")

    switch (operator) {
      case '+':
        output.push(a + b);
        break;
      case '-':
        output.push(a - b);
        break;
      case 'x':
        output.push(a * b);
        break;
      case '/':
        output.push(a / b);
        break;
    }
  }






export default class CalulatorService extends React.Component<ICalulatorServiceProps> {
  public render() {
    return (
      <div>
        
      </div>
    );
  }
}
