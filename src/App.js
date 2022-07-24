import {StyledContainer} from './components/Styles';
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register';
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
      <Route path="/register" element={<Register/> } />      
      <Route path="/login" element={<Login/>} /> 
      <Route path="/dashboard" element={<Dashboard/>} />
      </Routes> 
    </StyledContainer>
    </Router>
  );
}

export default App;
