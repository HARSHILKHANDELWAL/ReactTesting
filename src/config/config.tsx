import axios from 'axios';

export interface IAppProps {
  

}
let user:any;
let pass:any;
let token:'';

export function postConfig(jsonArray: any) {
console.log(user,pass,"")
    // headers: {
    //   'Authorization': 'Basic ' + btoa(user + ':' + pass)
    // }  
    // http://localhost:8081/CalculatorBackendJwt/CalculatorController

  return axios.post('http://localhost:8080/reactcalculatorbackend/CalculatorController', jsonArray,{
  
      //  headers: {"Authorization" : `Bearer ${token}`} 
         headers: {
      'Authorization': 'Basic ' + btoa(user + ':' + pass)
    }  

  }
  )
}

export function loginConfig(username:any,password:any) {
  console.log(username,password)
 user=username;
 pass=password;

  //Buffer is not supported by run time envioremnt you need to iimport and install this
  //working is same as btoa (binary to ascii)
  // http://localhost:8080/DemoJwtAuthentication/api/auth/signin
  return axios.get('http://localhost:8080/reactcalculatorbackend/login',
   {
    // username,password
    headers: {
      'Authorization': 'Basic ' + btoa(user + ':' + pass)
    }
  }
  )
//   .then((response)=>{
//     token=response.data.accessToken;
// console.log(response.data.accessToken)
//   });
}
export function logout() {
  window.localStorage.removeItem("jwtToken");

user=''
pass=''
  //Buffer is not supported by run time envioremnt you need to iimport and install this
  //working is same as btoa (binary to ascii)
  // http://localhost:8080/reactcalculatorbackend/user/logout
  // http://localhost:8080/DemoJwtAuthentication/api/auth/logout
  return axios.post(' http://localhost:8080/reactcalculatorbackend/user/logout',
   {
    headers: {
      'Content-Type': 'application/json',
    }
  }
  );
}