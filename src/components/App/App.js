import React from "react";
import './App.css';
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import {Route, Switch} from 'react-router-dom';
import '../../vendor/fonts/fonts.css';
import Footer from "../Footer/Footer";
import PopupTypeRegister from "../PopupTypeRegister/PopupTypeRegister";
import PopupTypeLogin from "../PopupTypeLogin/PopupTypeLogin";
import PopupTypeSuccess from "../PopupTypeSuccess/PopupTypeSuccess";

function App() {
  const [open, setOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(true);
  const name = "Таня";

  const handleOpenClick = () => {
    setOpen(!open);
  }

  const handleCloseClick = () => {
    setOpen(false);
  }

  return (
    <div className="page">
      <div className="page__cover">
        <Switch>
          <Route exact path="/">
            <Main open={open} handleOpenClick={handleOpenClick} name={name} loggedIn={loggedIn} handleCloseClick={handleCloseClick} />
          </Route>
          <Route path="/saved-news">
            <SavedNews open={open} handleOpenClick={handleOpenClick} name={name} loggedIn={loggedIn} />
          </Route>
        </Switch>
        <Footer/>
        {/*<PopupTypeRegister/>*/}
        {/*<PopupTypeLogin/>*/}
        {/*<PopupTypeSuccess/>*/}
      </div>
    </div>
  );
}

export default App;
