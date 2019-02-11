import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import { tabSelected } from '../actions';

class TabBar extends React.Component {

    componentDidMount(){
        console.log(this.props);
    }

    handleChange = (event, value) => {
        this.props.dispatch(tabSelected(value))
    }    

    render(){
        return (
            <Tabs value={this.props.tabSelected} variant="fullWidth" onChange={this.handleChange}>
                <Tab label="On Going" />
                <Tab label="Completed" />
            </Tabs>
        )
    }
}

const mapStateToProps = ({tabSelected}) => ({
    tabSelected
})
export default connect(mapStateToProps)(TabBar);