import './App.css';
import Carousel from './components/carousel/Carousel';
function App() {

  const images = [
    'https://via.placeholder.com/600x300?text=Slide+1',
    'https://via.placeholder.com/600x300?text=Slide+2',
    'https://via.placeholder.com/600x300?text=Slide+3',
];

  return (
    <div className="App">
      <h1>Hello Word</h1>

      <Carousel images={images} />
    </div>

  );
}

export default App;
