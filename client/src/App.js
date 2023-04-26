import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import OTHO from './pages/Auth/authentification';
import Profile from './pages/Profile/Profile';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Group from './pages/groups/groups';
import Contact from "./pages/contact/contact"
import About from './pages/about/about';
import Cookies from "js-cookie";

function App() {
  
  
  const user = (Cookies.get('user'));

  return(
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/auth' element={ user? <Navigate to='/' /> : <OTHO />  } exact />
        <Route path='/profile' element={ user ? <Profile  /> : <Navigate to='/' /> } exact />
        <Route path='/about' element={ user ? <About  />  : <Navigate to='/' /> } exact />
        <Route path='/contact' element={ user? <Contact  /> : <Navigate to="/" /> } exact />
        <Route path='/groups' element={ user ? <Group  /> : <Navigate to="/" /> } exact />
        <Route path='/' element={ user? <Home  /> : <Navigate to="/auth" /> } exact />
        <Route path='*' element={<NotFound />} exact />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App;
