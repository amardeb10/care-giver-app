import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import QuizIcon from '@mui/icons-material/Quiz';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Diversity1Icon from '@mui/icons-material/Diversity1';
const items = [
  {
    icon: <NotificationImportantIcon />,
    title: 'Personalized Reminders',
    description:
      'Easily create and manage reminders for important tasks such as medications, appointments, and daily activities. Our intuitive interface allows you to set up recurring reminders, ensuring nothing is forgotten. You can customize alerts to suit the specific needs and schedules of your patients.',
  },
  {
    icon: <QuizIcon />,
    title: 'Mindful Quizzes',
    description:
      'Our platform offers a variety of mindful quizzes designed to stimulate cognitive functions and provide mental engagement for patients. These quizzes cover different topics and difficulty levels, promoting brain activity and helping to slow cognitive decline. Patients can enjoy these quizzes at their own pace, providing both entertainment and mental exercise.',
  },
  {
    icon: <QueryStatsIcon />,
    title: 'Progress Tracking',
    description:
      'Track your patient’s progress over time with our detailed analytics. See how they respond to different quizzes and activities, and use this information to tailor your care approach. Our tracking tools help you make informed decisions and adjust care plans as needed.',
  },
  {
    icon: <Diversity1Icon/>,
    title: 'Community Support',
    description:
      'Join a community of caregivers who understand your challenges. Share experiences, seek advice, and offer support to one another. Our forums and support groups provide a safe space to connect with others who are on the same journey.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Reliable support',
    description:
      'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Precision in every detail',
    description:
      'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Features for caregivers
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
