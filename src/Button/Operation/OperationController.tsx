import * as React from 'react';
import { operationalBttns } from '../../Calculator/CalculatorModel';
import ButtonView from '../ButtonView';
import "./Operation.css"
export interface IOperationControllerProps {
    buttons: { type: string, value: string ,Symbol:string};
key:any
    onClick: (event:any) => void;
}

export default class OperationController extends React.Component<IOperationControllerProps> {
    public render() {
        const  buttons  = operationalBttns
        ;
        return (
            <div className='operaSection'>
     
          <ButtonView  button={this.props.buttons} id={"operaButton-"+this.props.buttons.value}  value={this.props.buttons.Symbol}onClick={()=>this.props.onClick(this.props.buttons)}/>

         
          </div>
        );
      }
}
