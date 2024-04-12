import * as React from 'react';
import { numericalBttns } from '../../Calculator/CalculatorModel';
import ButtonView from '../ButtonView';
import "./Number.css";


export interface INumberControllerProps {
  // buttons: { type: string, value: string }[];
  buttons: { type: string, value: string };
  onClick: (button: any) => void;
  key: any

}

export default class NumberController extends React.Component<INumberControllerProps> {
  public render() {
    const buttons = numericalBttns;
    return (
      <div className='numSection'>
        <ButtonView button={this.props.buttons} id={"numButton-" + this.props.buttons.value} value={this.props.buttons.value} onClick={() => this.props.onClick(this.props.buttons)} />
      </div>
    );
  }
}
