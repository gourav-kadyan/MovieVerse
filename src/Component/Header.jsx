import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import { red } from '@mui/material/colors';

const Header = () => {
  return (
    <div className='text-3xl font-bold p-3 border-b-2 border-gray-500 flex justify-between items-center ' > 
        <div><span className='text-red-500'>Movie</span><span>Verse</span></div>
        <Button><h1 className='text-lg cursor-pointer flex items-center '> <AddCircleIcon className='mr-1' sx={{color : red[500]}} /><span className='text-white'>Add New</span></h1></Button>
    </div>
  )
}

export default Header