import './App.css';
import About from './components/About';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
    </>
  );
}

export default App;
