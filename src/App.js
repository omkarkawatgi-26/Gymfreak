import './App.css';
import Hero from './Components/Hero/Hero.js'
import Program from './Components/Program/program.jsx';
import Reason from './Components/Reason/reason'
import Plans from './Components/Plans/plans'
import Testimonials from './Components/Testimonials/Testimonials'
import Join from './Components/Join/Join.js';
import Footer from './Components/Footer/Footer.js';
function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Program></Program>
      <Reason></Reason>
      <Plans></Plans>
      <Testimonials></Testimonials>
      <Join></Join>
      <Footer></Footer>
    </div>
  );
}

export default App;
