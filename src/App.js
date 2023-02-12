import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Collection from './components/Collections/Collection';
import Cities from './components/Cities/Cities';
import Card from './components/Card/Card';
import CTA from './components/CTA/CTA';
import AccContainer from './components/AccContainer/AccContainer';
import './app.scss';

function App() {
  return (
    <div className='App'>
     <Header/>
     <Footer/>
     <Collection/>
     <Cities/>
     <Card/>
     <CTA/>
     <AccContainer/>
    </div>
  );
}

export default App;
