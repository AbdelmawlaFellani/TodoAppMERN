
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import CompletedPage from './Pages/CompletedPage';
import Background from "./Components/Background";


function App() {
  
  return (
    <Router>

    <div className="App">
    <Background/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/completed' element={<CompletedPage/>}></Route>
        <Route></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
