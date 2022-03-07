import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './componets/Home';

const Container = () => (
  <div className='app'>
    <div className='container'>
      <Outlet />
    </div>
  </div>
);


const User = () => (
  <>
    Display here the full content of 1 user from the 20: name, location and
    email and make them editable (in the dom only)
  </>
);

const App = () => (
  <Routes>
    <Route path='/' element={<Container />}>
      <Route index element={<Home />} />
      <Route path='*' element={<User />} />
    </Route>
  </Routes>
);

export default App;
