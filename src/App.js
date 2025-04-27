import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'

import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

function CheckBoxExample(){
    const [checked, setChecked] = React.useState(true);
    return (
        <FormControlLabel
        control={
            <Checkbox
                checked={checked}
                Icon={<DeleteIcon/>}
                checkedIcon={<SaveIcon/>}
                onChange={(e)=>setChecked(e.target.checked)}
                color="primary"
                inputProps = {{
                    'aria-label':'secondary checkbox'
                }}
            />}
            label="Testing CheckBox"
        />
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <CheckBoxExample/>
          <ButtonGroup variant="contained">
            <Button 
                startIcon={<SaveIcon/>}
                color="primary">
                    Save
            </Button>
            <Button 
                startIcon={<DeleteIcon/>}
                color="secondary">
                    Discard
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
