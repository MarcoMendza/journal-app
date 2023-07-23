import { MailLockOutlined } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../view/NothingSelectedView'

export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat blanditiis praesentium animi veritatis aliquid, soluta similique iure facere, est magni sapiente. Suscipit tenetur neque reiciendis aspernatur quisquam ullam earum aliquid.</Typography>
       */}
    
       <NothingSelectedView/>
       
    </JournalLayout>

  )
}
