import React from "react";
import './App.css';
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import {Route, Switch} from 'react-router-dom';
import '../../vendor/fonts/fonts.css';
import Footer from "../Footer/Footer";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <div className="page">
      <div className="page__cover">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
          </Route>
          <Route path="/saved-news">
            <SavedNews loggedIn={loggedIn} />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
