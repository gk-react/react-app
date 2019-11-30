import React from 'react';
import gamia from './gamia.png';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends React.Component
{render()
    {let element=null
    let isLogin= true
  /*if(isLogin){
    element= <h1>welcom to admin</h1>}
    else{
        element= <h2>please login</h2>
    
    }*/
 isLogin ? element= <h1>welcom to admin</h1>:element= <h1>please login to admin</h1>

    return(
    <React.Fragment>
    <div className="div"><h2> i am from login component</h2>
    <h3>{element}</h3>
<button className="button">submit</button>
<button className="btn btn-success">Submit</button>
</div>
    
       </React.Fragment>)

}}
export default Login;