import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
// using ES6 modules
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PersonalPage from "./PersonalPage";
import ChatPage from "./ChatPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatPage />
            IT WORKS
          </Route>
          <Route path="/chat">
            <Header backbutton="/" />
            <ChatPage />
          </Route>

          <Route path="/personal">
            <Header />
            <PersonalPage />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
