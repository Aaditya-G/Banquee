import './App.css';
import Header from './components/header/header.js'
import Sponsors from './components/sponsors/sponsor.js'
import Features  from './components/features/features';
import GoDigital from './components/goDigital/godigital';

function App() {
  return (
    <div className="App">
      <div className="disc">
        Please view in monitor
      </div>
      <div className="main">
      <Header/>
      <Sponsors />
      <Features />
      <GoDigital/>
      </div>
     
    </div>
  );
}

export default App;
