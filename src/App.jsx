import { Box } from '@mui/material';
import './App.css';
import Content from './Components/Content';
import NavBar from './Components/NavBar';
import Products from './Components/Catrgory';
// import SimpleSlider from './Components/TopCrousal';


function App() {
  return (
    <div className="App">
      {/* <h1>pharmeasy</h1> */}
      <NavBar />
      <span className="main-box">
        <Content />
        <Products />
      </span>

      
      {/* <SimpleSlider />  */}
      
    </div>
  );
}

export default App;
