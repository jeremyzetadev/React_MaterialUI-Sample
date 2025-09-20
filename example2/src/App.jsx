import React from 'react'
// import { Typography } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Icon} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import {ButtonGroup, Button} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

function App() {
const buttons = [
  <Button key="two">Two</Button>,
];

    const cards = [1,2,3,4,5,6,7,8,9]

  return (
      <>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <PhotoCameraIcon/>
                <Typography variant= "h6">
                    Photo Album
                </Typography>
            </Toolbar>
        </AppBar>

        <main>
            <div>
                <Container maxWidth="sm" >
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Photo Album
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Hello everyone This is a photo album and Im trying to make this sentence as long as possible so we can see it in the screen.
                    </Typography>
                    <div>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    See my photos
                                </Button>
                                <Button variant="contained" color="secondary">
                                    Secondary action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card)=>(
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className="">
                                <CardMedia
                                    className=""
                                    image="https://source.unsplash.com/random"
                                    title="Image title"
                                />
                                <CardContent className="">
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        This is a media card. Add content
                                    </Typography>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
        <Container>
            <ButtonGroup size="small" aria-label="Small button group">
                  {buttons}
                </ButtonGroup>
                <ButtonGroup color="secondary" aria-label="Medium-sized button group">
                  {buttons}
                </ButtonGroup>
                <ButtonGroup size="large" aria-label="Large button group">
                  {buttons}
            </ButtonGroup>
        </Container>
      </>
  );
}

export default App;
