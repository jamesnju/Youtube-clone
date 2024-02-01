import './App.css';
import Header from './components/Navbar/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftSide from './components/Sidebar/LeftSide';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Shorts from './components/Pages/Shorts';




function App() {
  return (
    <div className="App">
     <Header/>
     <LeftSide/>
     <Routes>
             <Route path='/shorts' element={<Shorts/>}/>
             <Route path='/home' element={<Home/>}/>
         </Routes>
    </div>
  );
}

export default App;
