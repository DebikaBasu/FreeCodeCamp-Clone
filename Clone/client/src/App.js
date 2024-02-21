import { Box } from '@mui/material';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import Course from './components/home/Course';

import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
        <Box style={{marginTop: 45}}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/courses' element={<Course/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
