import './App.css';
import SideBar from './SideBar';
import RecVideos from './RecVideos';
import Header from './Header';
import Homescreen from './Homescreen';
import React from 'react';
import { createStoreHook } from 'react-redux';
import SearchResult from './SearchResult';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import zIndex from '@material-ui/core/styles/zIndex';


const RenderLayout = ({ children }) => {
  return(
      <>
        <Header />
        <div className='mainBody'>
          <SideBar></SideBar>
          {children}
        </div>
      </>
  )
}

function App() {
  return (
    <Router>

        <Routes>
          
          <Route 
            path='/' 
            element={
              <RenderLayout>
                <Homescreen />
              </RenderLayout>
            } 
          />

          <Route 
            path='/search'
            element={
              <RenderLayout>
                <SearchResult />
              </RenderLayout>
            }
          />

          <Route 
            path="*" 
            element={ 
              <Navigate to="/" /> 
            } 
          />

        </Routes>
    
    </Router>

  )



      
      
      {/* {header} */}
      {/* {sidebar} */}
      {/* {Recvids} */}
}

export default App;
