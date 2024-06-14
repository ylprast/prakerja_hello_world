
import Navbar from './header.jsx'
import './App.css'
import './bootstrap.min.css'
import '../js/bootstrap.bundle.min.js'
import '../js/animated-headline.js'
import '../js/click-scroll.js'
import '../js/custom.js'
import '../js/jquery.min.js'
import '../js/jquery.sticky.js'

import HeroSection from '../OverlaySection.jsx'
import CarouselComponent from '../carousel.jsx'
import AboutSection from '../section2.jsx'
import EventsSection from '../section3.jsx'
import ProjectComponent from '../project.jsx'
import TodoApp from '../todolist.jsx'
import Footer from './footer.jsx'

function App() {

  return (
    <>
    
      <div className='App'>
        <Navbar/>
        <HeroSection/>
        <CarouselComponent/>
        <AboutSection/>
        <EventsSection/>
        <ProjectComponent/>
        <TodoApp/>
        <Footer/>
      </div>
    </>
  );
}

export default App
