// components/Articles.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'dementia',
        apiKey: '7c8e0f5138354969a23d2a3d47046edb',
        sortBy: 'publishedAt',
        pageSize: 5, // Fetch only the top 5 articles
        
      }
    })
    .then(response => {
      setArticles(response.data.articles);
    })
    .catch(error => {
      console.error('Error fetching articles:', error);
    });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Latest Articles on Dementia</Typography>
      <List>
        {articles.map((article, index) => (
          <ListItem key={index} component="a" href={article.url} target="_blank" rel="noopener noreferrer">
            <ListItemText primary={article.title} secondary={article.description} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Articles;
