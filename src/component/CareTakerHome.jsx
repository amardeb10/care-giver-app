import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>Welcome to Caretaker Home</Typography>
      <Button component={Link} to="/graphs" variant="contained" color="primary">Patient Progress Graphs</Button>
      <Button component={Link} to="/location" variant="contained" color="primary">Patient Location</Button>
      <Button component={Link} to="/faqs" variant="contained" color="primary">Community FAQs</Button>
      <Button component={Link} to="/articles" variant="contained" color="primary">Latest Articles</Button>
    </Container>
  );
}

export default Home;