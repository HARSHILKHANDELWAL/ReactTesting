import * as React from 'react';
import "./Login.css"
import { loginConfig } from '../config/config';
import { Navigate, useNavigate } from "react-router-dom";
export interface ILoginControllerProps {
  handleSubmit1: (event:any) => void;
}

  
export default class LoginController extends React.Component<{}> {
    username: any;
    password: any;
    token:any;
    state = { LoggedIn:false ,InvalidCredentials:false};

    
     handleSubmit = (event:any) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        const user=formJson.username
     

        loginConfig(formJson.username,formJson.password).then(response => {
          this.setState({ LoggedIn:true });

         }).catch((error:any)=>{
          this.setState({ InvalidCredentials:true });
    console.log(error.response.status)
        })
      };


  public render() {
    let { LoggedIn,InvalidCredentials } = this.state;
    return (
 
    <div className="login-form" data-testid="loggin">
      <div>
        {LoggedIn && (
          <Navigate to="/calculator" replace={true} />
        )}
  {InvalidCredentials && (
         <p>give correct credentials</p>
        )}
        </div>
  <form method='GET' 
onSubmit={this.handleSubmit} >
    <h1>Login</h1>
    <div className="content" >
      <div className="input-field">
     
        <input type="text" placeholder="Username" id='username' name="username"/>
      </div>
      <div className="input-field">
        <input type="password" placeholder="Password" id='password' name='password'  />
      </div>

    </div>
    <div className='loginButton'>
      <button id="login-Button" type="submit">Signin</button>
      </div>
  </form>
</div>
 
    );
  }
}
