import { Route, Routes } from 'react-router-dom';
import './App.css';
import Customer from './Routes/Customers';
import CustomerPage from './Routes/CustomerPage';
import Home from './Routes/Home';
import { Heading } from '@chakra-ui/react';


function App() {
  
  return (
    <div>
      <Routes>
        <Route exact path = '/customers' 
        element = {<Customer/>}/>
      </Routes>
      <Routes>
        <Route exact path = '/' 
        element = {<Home/>}/>
        <Route exact path = '/customerPage/:id' 
        element = {<CustomerPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
