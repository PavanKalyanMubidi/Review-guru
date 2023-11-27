
import Index1 from './Cards';
import Index from './Home';

import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/cards' element={<Index1/>}/>
     </Routes>
    </div>
  );
}

export default App;