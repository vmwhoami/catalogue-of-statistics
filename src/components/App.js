import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../container/Home';
import Errorpage from './Errorpage';
import CryptoInfo from '../container/CryptoInfo';
import app from '../styles/App.module.css';
import Nav from './Nav';
import Footer from './Footer';

function App() {
  return (
    <div className={app.container}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:id">
            {' '}
            <CryptoInfo />
          </Route>
          <Route path="*" component={Errorpage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
