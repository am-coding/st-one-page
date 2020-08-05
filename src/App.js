import React from 'react';
import './App.css';
import ResponsiveDrawer from './components/drawer'
import GridLayout from './components/Grid'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
  typography: {
   "fontFamily": `"DM Sans", sans-serif`,
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  },
});

function App() {
  return (
    <div>
      <div className="main-div">        
       <MuiThemeProvider theme={THEME}>
        <ResponsiveDrawer />
          <GridLayout />
       </MuiThemeProvider>
      </div>
       
    </div>
  );
}

export default App;
