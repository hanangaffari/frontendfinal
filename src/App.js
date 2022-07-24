import {StyledContainer} from './components/Styles';
import Home from './pages/Home';
import Login from './pages/Login'
import Registerdosen from './pages/Registerdosen';
import Dashboard from './pages/Dashboard';

import{
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom';



function App() {
  return (
    <Router>
    <StyledContainer>
    <Routes>       
      <Route path="/" element={<Home/>} />
      <Route path="/registerdosen" element={<Registerdosen/> } />      
      <Route path="/login" element={<Login/>} /> 
      <Route path="/dashboard" element={<Dashboard/>} />
      </Routes> 
    </StyledContainer>
    </Router>
  );
}

export default App;
