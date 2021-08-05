import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Shop from "./components/Shop";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Router>
        <Title />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </Router>
      ;
    </>
  );
}

export default App;
