import React from 'react';
import AppBarComponent from './AppBarComponent';
import TabBar from './TabBar';


class Home extends React.Component {

    render(){
        return(
            <div>
                <AppBarComponent />
                <TabBar />
            </div>
        )
    }
}

const styles = {
    
}

export default Home;