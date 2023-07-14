import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/HeaderComponent';

import MainView from './Views/MainView';
import About from './Views/AboutView';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<MainView />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
