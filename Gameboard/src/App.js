import * as React from 'react';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import { Box, Stack } from '@mui/material';
import Tournaments from './components/Tournaments';


function App() {
  return (
    <Box >
      <Stack direction="row" spacing={2} justifyContent="space-between">
             <Sidebar/>
             <Rightbar/>
      </Stack>
      <Tournaments/>
    </Box>
  );
}

export default App;
