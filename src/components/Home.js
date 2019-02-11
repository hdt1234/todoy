import React from 'react';
import AppBarComponent from './AppBarComponent';
import TabBar from './TabBar';
import OnGoingTab from './OnGoingTab';
import TodoItem from './TodoItem';

class Home extends React.Component {

    render(){
        return(
            <div>
                <AppBarComponent />
                <TabBar />
                <OnGoingTab />
                {/* <TodoItem title="Sa" content="SAADASDAE^!'^123123124124 21 12 321w" selected={false}/> */}
            </div>
        )
    }
}

export default Home;