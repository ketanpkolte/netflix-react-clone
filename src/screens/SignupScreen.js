import React,{useRef} from 'react';
import { auth } from '../firebase';
import "./SignupScreen.css"

function SingupScreen() {

const emailRef = useRef(null);
const passwordRef = useRef(null);

 const register= (e) =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.currnet.value
    ).then((authUser)=>{
      console.log(authUser);

    }).catch(error=>{
        alert(error.message);
    })
  };

  const signIn = (e) =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.currnet.value
    )
    .then((authUser)=>{console.log(authUser);
    })
  };

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type= 'email' placeholder="Email-Address" />
        <input ref={passwordRef} type='password' placeholder="Password"/>
        <button type='submit'
          onlick={signIn}>Sign In</button>
        <h4> 
          <span className="signupScreen__graytext">New to Netflix? </span>
          <span className="signupScreen__link"
          onClick={register}>Sign Up now.</span>
          </h4>
      </form>
    
    </div>
  )
}

export default SingupScreen