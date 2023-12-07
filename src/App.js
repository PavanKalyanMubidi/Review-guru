
import Index1 from '../src/Components/Cards/index';
import Index from '../src/Components/Home/index';

import { Routes,Route } from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/' element={<Index/>}/>
      <Route path='/cards' element={<Index1/>}/>
      <Route path='/profile' element={<Profile/>} />
      <Route path='/footer' element={<Footer/>}/>
     </Routes>
    </div>
  );
}

export default App;