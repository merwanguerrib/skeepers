import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/Home';
import {User} from './components/User';

const Container = () => (
  <div className='app'>
    <div className='columns is-multiline'>
      <Outlet />
    </div>
  </div>
);

const App = () => (
   <Routes>
    <Route path='/' element={<Container />}>
      <Route index element={<Home />} />
      <Route path='/user' element={<User />} />
    </Route>
  </Routes>
);

export default App;
