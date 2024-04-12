import * as React from 'react';
import Function from '../Button/Function/Function';
import DisplayController from '../Display/DisplayController';
import NumberController from '../Button/Number/NumberController';
import OperationController from '../Button/Operation/OperationController';
import CalculatorModel, { functionBttns, numericalBttns, operationalBttns } from './CalculatorModel';
import { evaluateExpressionUsingEval } from './CalulatorService';
import "./Calculator.css"
import { logout, postConfig } from '../config/config';
import { Navigate } from 'react-router-dom';

export interface ICalculatorControllerProps {
}
interface state {
    inputValue: string
    logout: boolean
}
export default class CalculatorController extends React.Component<ICalculatorControllerProps, state> {

    functionButtons = functionBttns;
    updatedValue = '';
    currentValue: any;
    buttonArray: any = [];
    data: any = 3;


    constructor(props: {}) {

        super(props);
        this.state = {
            inputValue: '',
            logout: false
        };
    }

    //numButtonHandler
    numButtonClickHandler = (button: any) => {
        console.log(button, "numbutton")
        this.buttonArray.push({ "type": button.type, "value": button.value })
        this.currentValue = button.value;
        console.log(this.currentValue)
        if (this.updatedValue == '') {
            this.updatedValue = this.currentValue
        }
        else {
            this.updatedValue += this.currentValue
        }
        this.setState({ inputValue: this.updatedValue })
    }

    //functionButtonHandler
    funButtonClickHandler = (button: any) => {
        console.log(this.updatedValue, "fun invoked")
        this.currentValue = button.value;
        console.log(this.updatedValue)
        console.log(this.currentValue, "value")
        if (this.currentValue == 'AC') {
            this.updatedValue = ''
            this.buttonArray = []
        }
        else {
            this.updatedValue = this.updatedValue.slice(0, -1);
            this.buttonArray.pop()
            console.log(this.buttonArray, "DEL")

        }
        this.setState({ inputValue: this.updatedValue })
    }


    //operationalButtonClicker------->
    operationButtonClickHandler = (button: any) => {
        //   const result1 = evaluateExpressionUsingEval(this.updatedValue.toString());
        this.currentValue = button.Symbol;
        if (this.currentValue == '=') {
            console.log(this.buttonArray, "final array")
            const jsonArray = JSON.stringify(this.buttonArray)
            this.buttonArray = []
            postConfig(jsonArray).
                then(response => {
                    console.log(response.data)
                    const data = response.data.value;
                    this.buttonArray.push({ "type": "NUMBER", "value": response.data.value });
                    this.updatedValue = data;
                    this.setState({ inputValue: this.updatedValue })
                })
                .catch(error => {
                    if (error.response.status == '403') {
                        this.updatedValue = "Not allowed"
                        this.setState({ inputValue: this.updatedValue })
                    }
                    else if (error.response.status == '401') {
                        this.updatedValue = "Please login"
                        this.setState({ inputValue: this.updatedValue })
                    }
                }

                );

        }
        else {
            this.buttonArray.push({ "type": button.type, "value": button.value })

            if (this.updatedValue.slice(-1) == this.currentValue) {
                this.buttonArray.pop()
            } else {
                if (this.updatedValue.slice(-1) == 'x' || this.updatedValue.slice(-1) == '+' ||
                    this.updatedValue.slice(-1) == '-' || this.updatedValue.slice(-1) == '/'
                ) {
                    this.buttonArray.pop()
                }
                else {
                    this.updatedValue += this.currentValue
                }
            }

            this.setState({ inputValue: this.updatedValue })
        }

    }

    logout = () => {
        this.setState({ logout: true })
        logout();
    }
    public render() {
        const funcList = functionBttns.map((button, index) => { return <Function buttons={button} key={index} onClick={this.funButtonClickHandler} /> })
        const numList = numericalBttns.map((button, index) => { return <NumberController buttons={button} key={index} onClick={this.numButtonClickHandler} /> })
        const operaList = operationalBttns.map((button, index) => {  return<OperationController buttons={button} key={index} onClick={this.operationButtonClickHandler} />})
        return (

            <div className='container'>
                <div>
                    {this.state.logout && (
                        <Navigate to="/" replace={true} />
                    )}
                </div>
                {/* Display */}
                <DisplayController value={this.state.inputValue} />

                <div className="calButton">
                    {/* operation */}
                    <div className='operationBtn'>
                        {
                            operaList
                        }
                    </div>

                    {/* function */}
                    <div className='funBtn'>

                        {
                            funcList
                        }
                    </div>

                    {/* number */}
                    <div className='numButton'>
                        {numList}


                    </div>
                </div>
                <button className='redo' id="logoutButton" onClick={this.logout}>Logout</button>

            </div>
        );
    }
}
