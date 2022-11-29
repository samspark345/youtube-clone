import React from 'react'
import './sideBar.css'
import SidebarRow from './SidebarRow'
import Home from '@mui/icons-material/Home'
import TrendingDown from '@mui/icons-material/TrendingDown'
import SubscriptionsOutlined from '@mui/icons-material/SubscriptionsOutlined'
import VideoLibrary  from '@mui/icons-material/VideoLibrary'
import History  from '@mui/icons-material/History'
import OndemandVideo  from '@mui/icons-material/OndemandVideo'
import WatchLater  from '@mui/icons-material/WatchLater'
import ThumbUp  from '@mui/icons-material/ThumbUp'
import ExpandMore  from '@mui/icons-material/ExpandMore'



const topItems = [
    {icon: <Home />, title: 'Home'},
    {icon: <TrendingDown />, title: 'Trending'},
    {icon: <SubscriptionsOutlined />, title: 'Subscriptions'}
]

const bottItems = [
    {icon: <VideoLibrary />, title: 'Library'},
    {icon: <History />, title: 'History'},
    {icon: <OndemandVideo />, title: 'Your videos'},
    {icon: <WatchLater />, title: 'Watch later'},
    {icon: <ThumbUp />, title: 'Liked videos'},
    {icon: <ExpandMore />, title: 'Show more'}


]


const SideBar = () => {
  return (
    <>
        <div className='sideBar'>
            {
                topItems.map((item) => {
                    return <SidebarRow {...item}/>
                })
            }

            <hr />

            {
                bottItems.map((item) => {
                    return <SidebarRow {...item}/>
                })
            }

            <hr />
        </div>
    </>
    
  )
}

export default SideBar