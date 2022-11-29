import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './VideoCard.css'

function VideoCard(props) {
    const {image, title, channel, views, timestamp, channelImage} = props

    const trimTitle = (titleToTrim) => {
        for (let i = 54; i > 0; i--){
            if(titleToTrim.charAt(i) === ' '){
                return `${titleToTrim.substring(0, i)}...`;
            }
        }
        return `${titleToTrim.substring(0, 54)}...`
    }

    const convertPublishDate = (dateToConvert) => {
        const publishYear = parseInt(dateToConvert.substring(0, 4)) 
        const publishMonth = parseInt(dateToConvert.substring(5, 7))
        const publishDay = parseInt(dateToConvert.substring(8, 10))
        const publishHour = parseInt(dateToConvert.substring(11,13))
        const publishMinute = parseInt(dateToConvert.substring(14,16))
        const publishSeconds = parseInt(dateToConvert.substring(17, 19))

        const today = new Date();
        const currentYear = today.getFullYear()
        const currentMonth = today.getMonth()
        const currentDay = today.getDate()
        const currentHour = today.getHours()
        const currentMinute = today.getMinutes()

        const deltaYear = today.getFullYear() - publishYear
        const deltaMonth = today.getMonth() - publishMonth
        const deltaDay = today.getDate() - publishDay
        const deltaHour = today.getHours() - publishHour
        const deltaMinute = today.getMinutes() - publishMinute
        const deltaSeconds = today.getSeconds() - publishSeconds 

        if (deltaYear > 0){
            return (deltaYear === 1
            ?  `a year ago` : `${deltaYear} years ago`
            )
        } else if (deltaMonth > 0){
            return (deltaMonth === 1
            ?  `a month ago` : `${deltaMonth} months ago`
            )
        }else if (deltaDay > 0){
            return (deltaDay === 1
            ?  `a day ago` : `${deltaDay} days ago`
            )
        }else if (deltaHour > 0){
            return (deltaHour === 1
            ?  `a hours ago` : `${deltaHour} hours ago`
            )
        }else if (deltaMinute){
            return (deltaMinute === 1
            ?  `a minute ago` : `${deltaMinute} minutes ago`
            )
        }else{
            return (deltaSeconds === 1
            ?  `a second ago` : `${deltaSeconds} seconds ago`
            )
        }

    } 


    const titleToDisplay = title.length > 54? trimTitle(title) : title
    const publishDate =  new Date(timestamp.substring(0, 10));
    console.log(publishDate);

  return (
    <div className='videoCard'>
        <div className='videoCardImage'> 
            <img src={image} 
            onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com";
            }}
            alt='' className='videoCardThumbnail' />
        </div>
        
        <div className='videoCardInfo'>
            <Avatar className='videoCardAvatar' alt={channel} src={channel}/>
            <div className='videoText'>
                <h5>
                    {titleToDisplay}
                </h5>

                <p>
                    {channel}
                </p>

                <p>
                    {views} . {convertPublishDate(timestamp)}
                </p>
            </div>

        </div>
    </div>
  )
}

export default VideoCard