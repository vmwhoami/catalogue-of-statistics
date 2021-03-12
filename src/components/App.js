import '../styles/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../container/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
