import NavBrand from './components/NavBrand'
import NavMenu from './components/NavMenu'
import NavAccount from './components/NavAccount'
import ImageSlider from './components/ImageSlider'

const heroImages = [
  'images/hero_1.jpg',
  'images/hero_2.jpg',
  'images/hero_3.jpg',
  'images/hero_4.jpg',
  'images/hero_5.jpg',
  'images/hero_6.jpg',
  'images/hero_7.jpg',
  'images/hero_8.jpg',
  'images/hero_9.jpg',
];


function App() {
  return (
    <div className="w-full h-screen">
      <div className="w-full border-b-[1px]" id="header">
        <div className="max-w-screen-lg mx-auto flex flex-row items-center justify-between">
          <NavBrand />
          <NavMenu />
          <NavAccount />
        </div>
      </div>
      <ImageSlider slides = {heroImages}/>

    </div>
  );
}

export default App;
