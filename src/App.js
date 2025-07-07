
import { Outlet } from 'react-router-dom';
import './App.css';
import Heders from './components/navbar/Heders';
import Footer from './components/navbar/Footer';


function App() {
  return (
    <div className="App">
      <Heders />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
