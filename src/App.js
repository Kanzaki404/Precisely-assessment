import React, { Suspense } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './store/actions';
import i18n from './lang/i18n';
import styled from '@emotion/styled'
import './App.css';

import HomePage from './Pages/HomePage';
import Options from './Pages/Options';
import Contracts from './Pages/Contracts'
import Customers from './Pages/Customers'

import SideBar from './components/SideBar';



const Screen = styled.div`
  display: flex;
`
function App() {
  const { t } = useTranslation();
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
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
