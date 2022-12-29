import { Route, Routes } from 'react-router-dom';
import './App.css';
import Customer from './Routes/Customers';
import CustomerPage from './Routes/CustomerPage';
import Home from './Routes/Home';
import { Heading } from '@chakra-ui/react';


function App() {

  return (
    <div>
      <Heading position='absolute' left='5rem' top='0.5rem' fontSize='2.5rem'><span>TSF-Bank</span></Heading>
      <Routes>
        <Route exact path='/customers'
          element={<Customer />} />
        <Route exact path='/'
          element={<Home />} />
        <Route exact path='/customerPage/:id'
          element={<CustomerPage />} />
      </Routes>
    </div>
  );
}

export default App;
