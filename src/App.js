
import Index1 from './Cards';
import Index from './Home';

import { Routes,Route } from 'react-router-dom';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/cards' element={<Index1/>}/>
      <Route path='/profile' element={<Profile/>} />
     </Routes>
    </div>
  );
}

export default App;