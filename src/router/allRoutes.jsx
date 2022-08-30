import { Route, Routes } from "react-router-dom";
import AboutUs from "./about";
import CareerCounselling from "./career-counselling";
import Contact from "./contact";
import Hire from "./hire";
import Home from "./home";
import LifeCoach from "./lifecoach";

export default function AllRoutes(){


return <div>

<Routes>

<Route path="/" element={<Home/>} />
<Route path="/lifecoach" element={<LifeCoach/>} />
<Route path="/careercounselling" element={<CareerCounselling/>} />
<Route path='/aboutus' element={<AboutUs/>}  />
<Route path='/contact' element={<Contact/>}  />
<Route path='/hire' element={<Hire/>}  />
{/* <Route/>
<Route/>
<Route/> */}

</Routes>

</div>


}