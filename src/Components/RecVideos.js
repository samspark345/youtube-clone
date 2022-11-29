import { Button } from '@material-ui/core'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector } from 'react-redux'
import './recVideos.css'
import VideoCard from './VideoCard.js'

const RecVideos = ({handleRefresh}) => {
  const homeStateSelector = useSelector((state) => state.HomeState)
  const videoData = homeStateSelector.videos
  const loading = homeStateSelector.loading

  const getViewCount = (views) => {
    if (views.length < 4){
      return views;
    }else if (views.length < 7){
      return `${views.substring(0, views.length - 3)}.${views.substring(views.length - 3, views.length - 2)}K views`
    }else{
      return `${views.substring(0, views.length - 6)}.${views.substring(views.length - 6, views.length - 5)}M views`
    }
  }

  const getVideos = () => { 
    return videoData.map((video) => {
      // console.log(video)
      return <VideoCard
      key={video.id}
      className='videoCard' 
      image={video?.snippet.thumbnails.standard.url} 
      title={video?.snippet.title}
      channel={video?.snippet.channelTitle}
      timestamp={video?.snippet.publishedAt}
      views={
        getViewCount(video?.statistics.viewCount) }
      />
    })
  }

  console.log(handleRefresh)
  return (
    <div className='recVideos'>
        <h2>
            Recommended
        </h2>
        <InfiniteScroll
            dataLength={videoData.length}
            next={handleRefresh}
            hasMore={true}
            loader={
               <h1>Loading ...</h1>
            }
        >
          {
               <div className='recommendedVideos'>

               {getVideos()}
               {console.log(videoData)}
               {console.log(handleRefresh)}
               {  console.log(homeStateSelector)}
              </div>
          }

        </InfiniteScroll>
        {console.log(videoData)}
    </div>
  )
}

export default RecVideos