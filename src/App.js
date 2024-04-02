// import React, {useState} from 'react';
// import './App.css';
// import NavBar from './components/NavBar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/pages/Home';
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';
// import Footer from './components/Footer';
// import Login from './components/Login';
// import Dashboard from './components/pages/Dashboard';


// function App() {
//   return (
//     <>
//       <Router>
//       <NavBar />
//       <Routes> 
//           <Route path='/' exact element={ <Home />}></Route>
//           <Route path='/services' exact element={<Services />}> </Route>
//           <Route path='/products' exact element={<Products />}> </Route>
//           <Route path='/sign-up' exact element={<SignUp />}> </Route>
//           <Route path = '/' exact element={<Login />}></Route>
//           <Route path='/dashboard' exact element={<Dashboard /> }></Route>
//       </Routes>
//       <Footer/>
//       </Router>
//     </>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/pages/Dashboard';
import Orders from './components/pages/Orders';
import Settings from './components/pages/Settings';
import Tickets from './components/pages/Tickets'; 
import SignUp2 from './components/SignUp2'; 

// import DashboardHome from './components/pages/DashboardHome';
// import DashboardOrders from './components/pages/DashboardOrders';
// import DashboardSettings from './components/pages/DashboardSettings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><NavBar /><Home /><Footer /></>} />
        <Route path='/services' element={<><NavBar /><Services /><Footer /></>} />
        <Route path='/products' element={<><NavBar /><Products /><Footer /></>} />
        <Route path='/sign-up' element={<><NavBar /><SignUp /><Footer /></>} />
        <Route path='/login' element={<><NavBar /><Login /><Footer /></>} />
        <Route path = '/signUp' element = {<><NavBar /><SignUp2 /><Footer /></>} /> 

        {/* Dashboard route does not include NavBar or Footer */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path ='/dashboard/Orders' element = {<> <Orders /> </> } />
        <Route path ='/dashboard/Settings' element = {<> <Settings /> </> } />
        <Route path='/dashboard/Tickets' element={<Tickets />} />


          {/* <Route index element={<DashboardHome />} />
          <Route path='orders' element={<DashboardOrders />} />
          <Route path='settings' element={<DashboardSettings />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

/* 
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
*/
