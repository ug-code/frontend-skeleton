import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "../pages/home/HomePages";
import ExamplePage from "../pages/example/ExamplePage";


function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/example' component={ExamplePage}/>
            </Switch>
        </Router>
    );
}

export default Routes;
