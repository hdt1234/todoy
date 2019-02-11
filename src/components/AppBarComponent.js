import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import DrawerComponent from './DrawerComponent';
import Popover from '@material-ui/core/Popover';
import AddTodoCard from './AddTodoCard';
import {connect} from 'react-redux';
import { toggleDrawer, toggleAdd } from '../actions';

class AppBarComponent extends React.Component {

    menuClicked(){
        this.props.dispatch(toggleDrawer)
    }

    addClicked(){
        this.props.dispatch(toggleAdd());
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
                    <IconButton color="inherit" aria-label="Add" style={{marginLeft: 'auto'}} onClick={()=>this.addClicked()}>
                        <AddIcon />
                    </IconButton>
                    <Popover 
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={this.props.state.toggleAdd}
                        onClose={()=>this.addClicked()}
                    >
                        <AddTodoCard />
                    </Popover>


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