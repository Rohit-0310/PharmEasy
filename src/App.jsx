import { Box } from '@mui/material';
import './App.css';
import Content from './Components/Content';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Catrgorys from './Components/Catrgory';
import Products from './Components/Product';
// import SimpleSlider from './Components/TopCrousal';


function App() {
  return (
    <div>
      <NavBar />
      <Box className="main-box">
        <Content />
        <Catrgorys /> 
        
        <Routes>
          <Route path={"/Products"} element={<Products />} />
        </Routes>
      </Box>      
    </div>
  );
}

export default App;
