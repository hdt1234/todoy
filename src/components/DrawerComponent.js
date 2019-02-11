import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { connect } from 'react-redux';
import {toggleDrawer} from '../actions';

class DrawerComponent extends React.Component {

    componentDidMount(){
        console.log(this.props)
    }

    click(){
        this.props.dispatch(toggleDrawer);
        console.log(this.props);
    }

    render(){
        return (
            <Drawer open={this.props.toggleDrawer.isDrawerOpen} onClose={e => this.click()}>
                <div style={{width: '140px'}}></div>
            </Drawer>
        )
    }
};

const mapStateToProps = ({toggleDrawer}) => ({
    toggleDrawer
});

export default connect(mapStateToProps)(DrawerComponent);