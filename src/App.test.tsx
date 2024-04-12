import React from 'react';
import { RenderResult, fireEvent, getByText, render, screen } from '@testing-library/react';
import App from './App';
import DisplayController from './Display/DisplayController';
import CalculatorController from './Calculator/CalculatorController';
import LoginController from './Login/Login';
import ButtonView from './Button/ButtonView';
import { BrowserRouter as Router,  Routes } from 'react-router-dom';




describe('dipslay testing', () => {
  it("display", () => {
    render(<DisplayController value='Hello, World!'/>);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Hello, World!' } });
    // Assert that the div with the specific text content exists
    expect(inputElement).toHaveValue('Hello, World!');
  });
  
});

describe('Login testing', () => {
  it("Login", async() => {
    render( <LoginController  />);
    const inputElement:HTMLElement =  screen.getByPlaceholderText('Username')
    const inputPassword:HTMLElement = screen.getByPlaceholderText('Password')
    const form:HTMLFormElement=screen.getByTestId('loggin')
    fireEvent.change(inputElement, { target: { value: 'admin' } });
    expect(inputElement).toHaveValue('admin');


    fireEvent.change(inputPassword, { target: { value: 'password' } });
    expect(inputPassword).toHaveValue('password');
    
    fireEvent.submit(form);
    console.log("hello")
  
    // Here, you can add assertions to check the login status or any side effects of successful login
    // For example, you can check if the user is redirected to a different page



  });

});


describe('Calculator testing', () => {
  it("Calculate", async() => {
    
    render(
      <Router >
        <CalculatorController />
      </Router>
    );
    
    const inputElement = screen.getByRole('textbox');
   const button:HTMLElement=screen.getByText("+");
   fireEvent.click(button)
    
  
   expect(inputElement).toHaveValue('+')
 
  });

});
