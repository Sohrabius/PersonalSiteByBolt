import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import BeyondCode from './components/BeyondCode';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-ink-100">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
