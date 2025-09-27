import React from 'react'
// import { Typography } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
import {Container} from '@mui/material';
import {Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: 'white',
  padding: theme.spacing(2),
}));

const customThemeButton = createTheme({
  palette: {
    primary: {
      // main: '#1976d2',
      main: '#228B22',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});



function App() {
  return (
      <main>

      //1 No style 
        <Container>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Container>

      //2 Custom Style
        <Container>
            <CustomButton>Styled Button</CustomButton>
        </Container>

      //3 createTheme & ThemeProvider
        <Container>
            <ThemeProvider theme={customThemeButton}>
                <Button variant="contained">Contained Theme Button</Button>
            </ThemeProvider>
        </Container>

    </main>
  );
}

export default App;
