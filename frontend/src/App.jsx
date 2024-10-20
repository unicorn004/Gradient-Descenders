//import React from 'react'
import SignUp from './components/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SalesPredictionForm from './components/SalesPredictionForm ';
import CommodityTable from './components/CommodityTable';
import SalesForecastTable from './components/SalesForecastTable';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/salesPrediction" element={<SalesPredictionForm />} />
          <Route path="/dashboardForecast" element={<CommodityTable />} />
          <Route path="/dashboardForecastSales" element={<SalesForecastTable />} />
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App
