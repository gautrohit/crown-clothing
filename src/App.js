import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import ShopPage from "./pages/shop/ShopPage";

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
