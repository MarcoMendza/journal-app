import { AddOutlined, MailLockOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView} from '../view'

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat blanditiis praesentium animi veritatis aliquid, soluta similique iure facere, est magni sapiente. Suscipit tenetur neque reiciendis aspernatur quisquam ullam earum aliquid.</Typography>
       */}
    
       <NothingSelectedView/>
       {/* <NoteView/> */}

       <IconButton 
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
       >
        <AddOutlined sx={{fontSize: 30 }}/>        
       </IconButton>

    </JournalLayout>

  )
}
