import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@material-ui/core';

const App = () => {
  // Static data for cards
  const cards = [
    { title: 'Card Title 1', description: 'Card description 1', imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Card Title 2', description: 'Card description 2', imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Card Title 3', description: 'Card description 3', imageUrl: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Header</Typography>
        </Toolbar>
      </AppBar>

      {/* Card Grid */}
      <Grid container spacing={2} style={{ padding: 16 }}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={card.title}
                height="140"
                image={card.imageUrl}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Action 1</Button>
                <Button size="small">Action 2</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Footer */}
      <AppBar position="static" style={{ marginTop: 16 }}>
        <Toolbar>
          <Typography variant="h6">Footer</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default App;

