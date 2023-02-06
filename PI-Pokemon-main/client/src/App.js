import "./App.css";
import { BrowserRouter, Route , Switch } from "react-router-dom";
import {Landing,Home,Detail, Form} from "./views";






function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Home} />
          <Route exact path="/home/:id" component={Detail}/>
          <Route  path='/create' component={Form} />
          
          </Switch>      
      </div>
      </BrowserRouter>
  );
}

export default App;