import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";


export const SideBar = ({ drawerWidth = 240, toggleDrawer, isDrawerOpen, isDesktop }) => {
    const { displayName } = useSelector( state => state.auth );
    const { notes } = useSelector( state => state.journal );

    return (
        <Box 
            component='nav'
            sx={{width: { sm: drawerWidth}, flexShrink:{ sm: 0}}}
        >

    <Drawer
        variant={isDesktop ? "permanent" : "temporary"}  // Establecer variante basada en isDesktop
        open={isDesktop ? true : isDrawerOpen}  // Controlar apertura basada en isDesktop
        onClose={toggleDrawer}  // Mantener onClose handler
        sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
    >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    { displayName }
                </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    notes.map((note, index) => (
                        <SideBarItem key={ note.id ? note.id : index } { ...note } toggleDrawer={toggleDrawer} />                        
                    ))                    
                }
            </List>
        </Drawer>

    </Box>
  )
}
