import NavBrand from './components/NavBrand'
import NavMenu from './components/NavMenu'
import NavAccount from './components/NavAccount'

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
      <div className="w-full py-6 flex flex-row items-center justify-center">
        <div className="w-full h-72 bg-gray-100 border max-w-screen-lg">
            
        </div>
      </div>
    </div>
  );
}

export default App;
