import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import { userRows } from "./dummyData";
import User from "./pages/user/User.jsx";

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
                        <UserList data={userRows} />
                    </Route>
                    <Route path="/user/:userId">
                        <User />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
