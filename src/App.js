import logo from './logo.svg';
import './App.css';
import AllRoutes from './router/allRoutes';
import Navbar from './component/navbar';
import Footer from './component/footer';
import LifeCoach from './router/lifecoach';
import {Text,Image,Box  } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
   <Navbar/>
   <br/>
   <br/>
   <Box w={'95%'} m="auto" >

   <marquee behavior="alternate" direction=""   >
    
    <Text fontSize={{
      base:'6px',
      sm:'10px',
      md:'sm',
      lg:'xl',
      xl:'xl'

    }}   w='50%'  color={'green'} fontWeight='bold' >
    To Build Your Career SSP Team Alwayes Ready, Reach out to us To Know More Details .
    </Text> 
    </marquee>
   </Box>
      <AllRoutes/>
      {/* <LifeCoach/> */}
      <Footer/>
    </div>
  );
}

export default App;
