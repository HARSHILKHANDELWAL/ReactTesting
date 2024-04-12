import * as React from 'react';
import "./Button.css"
export interface IButtonViewProps {
    value:string;
button:{
  type:string,
  value:string
}
    id:string
    onClick: (button:any) => void
}


export default class ButtonView extends React.Component<IButtonViewProps> {
  
  public render() {
  const {value,button}=this.props
 
    return (
      <div>
        <button className="button"  id={this.props.id} onClick={()=>this.props.onClick(button)}> {value}</button>
      </div>
    );
  }
}
