import logo from './logo.svg';
import './App.css';
import AllRoutes from './router/allRoutes';
import Navbar from './component/navbar';
import Footer from './component/footer';
import LifeCoach from './router/lifecoach';


function App() {
  return (
    <div className="App">
   <Navbar/>
      <AllRoutes/>
      {/* <LifeCoach/> */}
      <Footer/>
    </div>
  );
}

export default App;
