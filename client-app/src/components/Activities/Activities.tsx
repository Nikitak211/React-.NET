import { Card, List, Typography } from '@mui/material'
import React from 'react'
import { AType } from '../../features/activitiesType'

type Props = {
    activity: AType
}

export const Activities:React.FC<Props> = ({activity}) => {
    // convert to date and show hours and minutes with leading zeros
    const date = new Date(activity.date);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    
    return (
        <Card sx={{ 
          backgroundColor: '#212121',
          width : '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff'
          
           }} aria-atomic={true}>
          <List sx={{
            display: 'grid',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Typography sx={{ color: 'white' }} variant="h4">{activity.title}</Typography>
            <Typography sx={{ color: 'white' }} variant="subtitle2">{activity.description}</Typography>
            <Typography sx={{ color: 'white' }} variant="subtitle2">posted: {formattedTime}</Typography>
            <Typography sx={{ color: 'white' }} variant="subtitle2">city: {activity.city}</Typography>
            <Typography sx={{ color: 'white' }} variant="subtitle2">venue: {activity.venue}</Typography>
            <Typography sx={{ color: 'white' }} variant="subtitle2">category: {activity.category}</Typography>
          </List>
        </Card>
      )
}