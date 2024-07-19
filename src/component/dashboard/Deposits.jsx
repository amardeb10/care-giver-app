import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import AddTaskIcon from '@mui/icons-material/AddTask';
function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Upcoming Activity</Title>
      <Typography component="p" variant="h4">
        Dentist's Appointment
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Mark As Completed <AddTaskIcon />
        </Link>
      </div>
    </React.Fragment>
  );
}
