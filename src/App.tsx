import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter, Redirect, Route, Switch} from "react-router-dom";
import store from "./redux/store";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";


const App = (props: any) => {
    return(
        <Provider store={store}>
            <NavBar/>
            <HashRouter>
                <Switch>
                    <Route exact path={Home.path} component={Home.component}/>
                </Switch>
            </HashRouter>
        </Provider>
    );
};

export default App