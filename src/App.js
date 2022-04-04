import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import styled from '@emotion/styled'
import HomePage from './Pages/HomePage';
import Options from './Pages/Options';
import Contracts from './Pages/Contracts'
import Customers from './Pages/Customers'
import SideBar from './components/SideBar/SideBar';

const Screen = styled.div`
  display: flex;
`
function App() {
  return (
    <Suspense fallback="Loading...">
      <Screen>
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="options" element={<Options />} />
        </Routes>
      </Screen>
    </Suspense>
  )
}

export default App;
