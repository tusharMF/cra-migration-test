import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Route1 from './Route1';
import Route2 from './Route2';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Link to='/one'>one</Link>
          <br />
          <Link to='/two'>two</Link>
        </div>
        <Routes>
          <Route path='/one' element={<Route1 />} />
          <Route path='/two' element={<Route2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
