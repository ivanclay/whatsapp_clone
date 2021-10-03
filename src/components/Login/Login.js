import React, {useState} from 'react';
//import { Link, useHistory } from "react-router-dom"; //out of training
import './Login.css'
import Api from '../../Api';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ onReceive }) => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     //const history = useHistory();

    const handleLoginFacebook = async () => {
        let result = await Api.fbPopup();
        if(result){
            onReceive(result.user);
        }else{
            alert('Erro');
        }
    }

    return (
        // <div className="login">
        //   <button onClick={handleLoginFacebook}>Logar com Facebook</button>
        // </div>
        <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
        //   onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button 
            className="login__btn login__google" 
            // onClick={signInWithGoogle}
        >
          Login with Google
        </button>
        <button  className="login__btn login__facebook" onClick={handleLoginFacebook}>Logar com Facebook</button>
        <div>
          <a href="#">Forgot Password</a>
        </div>
        <div>
          Don't have an account? <a href="#">Register</a> now.
        </div>
      </div>
    </div>
    );
}