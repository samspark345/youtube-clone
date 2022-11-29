import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import { Avatar } from '@mui/material';

function Header() {
  return (
    <>
      <div className='header'>
          <div className='headerTopLeft'>
            <MenuIcon />
            <img 
              className='headerLogo'
              src='https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png' 
              alt='' 
            />
          </div>
          
          <div className='headerInput'>
            <input type='text' placeholder='Search' />
            <SearchIcon className='headerSearchButton' />
          </div>

          <div className='headerTopRight'>
            <UploadOutlinedIcon />
            <NotificationsNoneOutlinedIcon />
            <AppsSharpIcon />
            <Avatar 
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg&_gl=1*1pvxm07*_ga*MTI3NDc3MTQwOC4xNjY0NjQ4NTA5*_ga_8JE65Q40S6*MTY2ODAzNDA2Ny4xOC4xLjE2NjgwMzQwODIuMC4wLjA."
              alt='' 
            />
          </div>
          
      </div>
    </>

  )
}

export default Header