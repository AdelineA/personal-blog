
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Homepage from './Pages/Homepage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/> 
        <Route path='navigation' element={<Navigation/>}/>
        <Route path='/home' element={<Home/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
