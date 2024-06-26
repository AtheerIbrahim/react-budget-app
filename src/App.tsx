import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BudgetApp from './layout/BudgetApp';
import Error from './layout/Error';
import Home from './layout/Home';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget-app" element={<BudgetApp />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
