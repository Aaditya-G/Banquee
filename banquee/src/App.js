import './App.css';
import Header from './components/header/header.js'
import Sponsors from './components/sponsors/sponsor.js'
import Features  from './components/features/features';
import GoDigital from './components/goDigital/godigital';
import Business from  './components/business/business'
import Personally from './components/personally/personally';
import Trust from './components/trust/trust';
import Faq from './components/faq/faq';
import Footer from './components/footer/footer';

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
      <Business/>
      <Personally/>
      <Trust/>
      <Faq />
      <Footer />
      </div>
     
    </div>
  );
}

export default App;
