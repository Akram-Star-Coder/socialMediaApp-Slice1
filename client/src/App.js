import {BrowserRouter, Route, Routes} from "react-router-dom";
import OTHO from './pages/Auth/authentification';
import Profile from './pages/Profile/Profile';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
//redux imports
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import rootReducer from './reducers/index';

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return(
    <>
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
        <Route path='/auth' element={<OTHO />} exact />
        <Route path='/profile' element={<Profile />} exact />
        <Route path='/' element={<Home />} exact />
        <Route path='*' element={<NotFound />} exact />
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App;
