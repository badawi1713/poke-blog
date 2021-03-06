import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components";
import { BlogProvider } from "./context";
import { Home, Blogs, About, Pokedex } from "./pages";
const App = () => {
  return (
    <BlogProvider>
      <Router>
        <div className="h-screen w-full flex flex-col">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/pokedex" component={Pokedex} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </BlogProvider>
  );
};

export default App;
