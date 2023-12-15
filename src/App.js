import './App.css';
import NavBar from './Components/AppBar';
import MainCrousel from './Components/MainCrousel';

import Home from './Components/Home';

function App() {
  return (
    <>
      <div>
      <NavBar />
      <MainCrousel />
        <Home/>
      </div>
    </>
  );
}

export default App;
