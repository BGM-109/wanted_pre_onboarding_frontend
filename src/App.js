import NavBrand from './components/NavBrand'
import NavMenu from './components/NavMenu'
import NavAccount from './components/NavAccount'

function App() {
  return (
    <div className="w-full h-screen">
      <div className="w-full border-b-[1px]" id="header">
        <div className="container-lg mx-auto p-4 flex flex-row items-center justify-between ">
          <NavBrand />
          <NavMenu />
          <NavAccount />
        </div>
      </div>
    </div>
  );
}

export default App;
