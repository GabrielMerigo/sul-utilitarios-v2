import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
