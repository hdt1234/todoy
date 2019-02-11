import React from 'react';
import List from '@material-ui/core/List';
import { connect } from 'react-redux';
import CompletedTodoItem from './CompletedTodoItem';


class CompletedTab extends React.Component {
    render(){
        return (
            <List>
                {this.props.todo.map( n => {
                    if(n.isDone){
                        return (
                            <CompletedTodoItem key = {n.id} id={n.id} title={n.title} selected={n.selected} isDone = {n.isDone} content={n.content}/>
                        )
                    }
                })}
            </List>
        )
    }
};

const mapStateToProps = ({todo}) => ({
    todo
})

export default connect(mapStateToProps)(CompletedTab);