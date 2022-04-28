import React,{useEffect} from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { auth } from './firebase';
import {useSelector, useDispatch} from "react-redux";
import { login, logout , selectUser } from "./features/userSlice";
import "./App.css";

function App() {
  const user = useSelector(selectUser);
  const dispatch= useDispatch();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
        if(userAuth){
          dispatch(login({
            uid: userAuth.uid,
            email: userAuth.email,
          }));
        }else{
          dispatch(logout());
        }
      });
      return unsubscribe;
    }, [dispatch]);

  return(
    <div className="app">
      <Router>{!user ? (<LoginScreen/>):(
          <Routes>
            <Route path = "/" element={<HomeScreen />}/>
          </Routes>
        )}
        </Router>
    </div>
  );
}
export default App;

