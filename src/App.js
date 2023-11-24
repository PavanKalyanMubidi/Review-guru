
import Index from './Home';

import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Index/>}/>
     </Routes>
    </div>
  );
}

export default App;