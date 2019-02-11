import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import DrawerComponent from './DrawerComponent';
import {connect} from 'react-redux';
import { toggleDrawer } from '../actions';

class AppBarComponent extends React.Component {

    menuClicked(){
        this.props.dispatch(toggleDrawer)
    }

    render(){
        return (
            <AppBar position="sticky" style={{backgroundColor: '#130f40'}}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu" onClick={()=>this.menuClicked()}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Todoy
                    </Typography>
                    <IconButton color="inherit" aria-label="Add" style={{marginLeft: 'auto'}}>
                        <AddIcon />
                    </IconButton>
                </Toolbar>
                <DrawerComponent ref={this.drawer}/>
            </AppBar>
        )
    }
}

const mapStateToProps = (state) => ({
    state
})

export default connect(mapStateToProps)(AppBarComponent);