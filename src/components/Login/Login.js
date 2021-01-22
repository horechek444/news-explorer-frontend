import React from "react";

const Login = ({onLogin}) => {
  const handleLoginSubmit = ({email, password}) => {
    if (!email || !password){
      return;
    }
    onLogin(email, password);
  }

  return (handleLoginSubmit);
}

export default Login;