

import './App.css';
import NavBar from './components/NavBar';
import ListPage from './components/listing/ListPage';
import DetailsPage from './components/details/DetailsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<ListPage/>}/>
      <Route path="/shirts/:details" element={<DetailsPage/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
