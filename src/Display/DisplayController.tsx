import * as React from 'react';
import  "./Display.css";
export interface IDisplayControllerProps {
  value: string
}

export default class DisplayController extends React.Component<IDisplayControllerProps> {
  public render() {

    // console.log(this.props.value)
    return (
  <div className='calc-screen'>
    <input type="text"  id="calScreen" value={this.props.value} readOnly />
  </div>



    );
  }
}
