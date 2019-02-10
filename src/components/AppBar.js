import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

class AppBarComponent extends React.Component {
    render(){
        return (
            <AppBar position="sticky" style={{backgroundColor: '#130f40'}}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Todoy
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default AppBarComponent;