import React from 'react';
import AppBarComponent from './AppBarComponent';
import TabBar from './TabBar';
import AddTodoCard from './AddTodoCard';

class Home extends React.Component {

    render(){
        return(
            <div>
                <AppBarComponent />
                <TabBar />
                {/* <AddTodoCard /> */}
            </div>
        )
    }
}

export default Home;