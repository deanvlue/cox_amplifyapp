import logo from './logo192.png';
import './App.css';
import {Helmet} from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cox Metics App</title>
        <link rel="icon" type="image/icon type" href="favicon.ico"/>
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Metrics App
        </p>
      </header>
    </div>
  );
}

export default App;
