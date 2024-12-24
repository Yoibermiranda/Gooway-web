import './App.css';
import Carousel from './components/carousel/carrusel.js';
import Banner from "./components/banner/banner";
function App() {

  const images = [
    'https://via.placeholder.com/600x300?text=Slide+1',
    'https://via.placeholder.com/600x300?text=Slide+2',
    'https://via.placeholder.com/600x300?text=Slide+3',
];

  return (
    <div className="App">
      <h1>Hello Word</h1>
      <Banner title="Conoce Toda la historia del Corralito de piedra" subtitle="web"/>
      <Carousel images={images} />
    </div>

  );
}

export default App;
