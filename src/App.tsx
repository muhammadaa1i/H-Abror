import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import TelegramContactWidget from './components/TelegramContactWidget';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyUs />
      <FAQ />
      <Contacts />
      <Footer />
      <TelegramContactWidget />
    </>
  );
}

export default App
