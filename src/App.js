import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";

function App() {
    return (
        <div className="App">
            <Topbar></Topbar>
            <div className="container">
                <Sidebar />
                <div className="others">Others</div>
            </div>
        </div>
    );
}

export default App;
