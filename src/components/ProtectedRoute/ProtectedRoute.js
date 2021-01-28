import React from "react";
import {Redirect, Route} from "react-router-dom";
import {useLocation} from 'react-router-dom';

const ProtectedRoute = ({loggedIn, ...props}) => {
  const location = useLocation().pathname === '/saved-news';

  React.useEffect(() => {
    if (!loggedIn && location) {
      props.onLoginPopupOpen();
    }
  }, []);
  return loggedIn ? <Route {...props} /> : <Redirect to="/"/>;
};

export default ProtectedRoute;