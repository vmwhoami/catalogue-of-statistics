import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../container/Home';
import app from '../styles/App.module.css';

function App() {
  return (
    <div className={app.container}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
