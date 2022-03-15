import { useEffect } from 'react';
import { Box } from '@mui/material';

import { fetchActivities } from './features/activities';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { AType } from './features/activitiesType';

import {Activities} from './components/Activities/Activities';

function App() {
  const dispatch = useAppDispatch();
  const activities = useAppSelector(state => state.activities.activities!);
  useEffect(() => {
    dispatch(
      fetchActivities('http://localhost:5000/api/activities')
    )
  }, []);
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gridGap: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%'
    }} >
      {activities && activities.map((activity: AType) => <Activities key={activity.id} activity={activity} />)}
    </Box>
  );
}

export default App;
