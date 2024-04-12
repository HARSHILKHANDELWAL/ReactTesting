import * as React from 'react';
import ButtonView from '../ButtonView';
import { functionBttns } from '../../Calculator/CalculatorModel';
import "./Function.css"
export interface IFunctionProps {
  buttons: { type: string, value: string };
  onClick: (button:any) => void;
  key:any
}

export default class Function extends React.Component<IFunctionProps,ButtonView> {
  public render() {
    const  buttons  = functionBttns;
    return (
   
        <ButtonView button={this.props.buttons}value={this.props.buttons.value} onClick={()=>this.props.onClick(this.props.buttons)} id={"funButton-"+this.props.buttons.value}/>
      //      <div className='funSection'>
     
        

      // </div>
    
    );
  }
}
