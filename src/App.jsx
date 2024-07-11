import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MathQuiz from './pages/MathQuiz';
import ChemQuiz from './pages/ChemQuiz';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/math' element={<MathQuiz />} />
        <Route path='/chemistry' element={<ChemQuiz />} />
      </Routes>
    </div>
  );
}

export default App;