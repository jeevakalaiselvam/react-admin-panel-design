import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import { userRows, productRows } from "./dummyData";
import User from "./pages/user/User.jsx";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

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
                    <Route path="/newUser">
                        <NewUser />
                    </Route>
                    <Route path="/products">
                        <ProductList data={productRows} />
                    </Route>
                    <Route path="/product/:productId">
                        <Product />
                    </Route>
                    <Route path="/newProduct">
                        <NewProduct />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
