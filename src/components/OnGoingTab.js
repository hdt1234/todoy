import React from 'react';
import List from '@material-ui/core/List';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

class OnGoingTab extends React.Component {

    componentDidMount(){

    }

    render(){
        return (
            <List>
                {this.props.todo.map( n => {
                    if(!n.isDone){
                        return (
                            <TodoItem key = {n.id} id={n.id} title={n.title} selected={n.selected} isDone = {n.isDone} content={n.content}/>
                        )
                    }
                })}
            </List>
        )
    }
};

const mapStateToProps = ({todo}) => ({
    todo
});

export default connect(mapStateToProps)(OnGoingTab);