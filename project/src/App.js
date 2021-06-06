import './App.css';
import {
	BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './assets/styles/style.scss'
import './assets/fonts/fonts';
import Header from '../src/components/Header/index';
import MainPage from '../src/components/MainPage/index';
import CardList from '../src/components/CardList/index';
import CardSlider from '../src/components/CardSlider/index';
import NotFound from '../src/components/NotFound/index';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Switch>
              <Route exact path="/main">
                <MainPage />
              </Route>

              <Route exact path="/game">
                <CardSlider></CardSlider>
              </Route>

              <Route exact path="/cards">
                <CardList/>
              </Route>

              <Route exact path="/">
                <MainPage/>
              </Route>

              <Route>
                <NotFound />
              </Route>

            </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
