import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../container/Home';
import Errorpage from './Errorpage';
import CryptoInfo from '../container/CryptoInfo';
import app from '../styles/App.module.css';

function App() {
  return (
    <div className={app.container}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:id">
            {' '}
            <CryptoInfo />
          </Route>
          <Route path="*" component={Errorpage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
