import React from 'react';
import AppBarComponent from './AppBarComponent';
import TabBar from './TabBar';
import OnGoingTab from './OnGoingTab';
import CompletedTab from './CompletedTab';
import { connect } from 'react-redux';

class Home extends React.Component {

    componentDidMount(){
        console.log(this.props);
        this.renderTab = this.renderTab.bind(this);
    }

    renderTab(){
        if(this.props.tabSelected === 0) {
            return <OnGoingTab />
        } else if(this.props.tabSelected === 1) {
            return <CompletedTab />
        }
    }

    render(){
        return(
            <div>
                <AppBarComponent />
                <TabBar />
                {this.renderTab()}
                
            </div>
        )
    }
}

const mapStateToProps = ({tabSelected}) => ({
    tabSelected
});

export default connect(mapStateToProps)(Home);