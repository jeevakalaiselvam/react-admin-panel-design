import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import { DataGrid } from "@material-ui/data-grid";

function App() {
    return (
        <Router>
            <Topbar></Topbar>
            <div className="container">
                <Sidebar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/users">
                        <UserList />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
