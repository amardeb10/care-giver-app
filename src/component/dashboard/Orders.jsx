import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, frequency, TodaysStatus) {
  return { id, date, name, frequency, TodaysStatus };
}

const rows = [
  createData(
    1,
    '16 Mar, 2024',
    'Taking Medicines Before Lunch',
    'Daily',
    'Completed'
  ),
  createData(
    2,
    '16 Mar, 2024',
    'Meeting Vibhas For Arranging Househelp',
    'Once',
    'Pending'
  ),
  createData(  3,
    '19 Mar, 2024',
    'Dentist Appointment',
    'Once',
    'Completed'
  ),
  createData(
    4,
    '16 Mar, 2024',
    'Taking Medicines',
    'Daily',
    'Completed'
  ),
  createData(
    5,
    '16 Mar, 2024',
    'Taking Medicines',
    'Daily',
    'Completed'
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Activites</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Regarding</TableCell>
            <TableCell>Frequency</TableCell>
            <TableCell>Current Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.frequency}</TableCell>
              <TableCell>{row.TodaysStatus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Activities
      </Link>
    </React.Fragment>
  );
}
