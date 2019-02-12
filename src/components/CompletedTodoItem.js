import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/Clear';
import ExpandMore from '@material-ui/icons/ExpandMore'
import Delete from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { selectTodo, toggleTodo, deleteTodo } from '../actions';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class CompletedTodoItem extends React.Component {

    componentDidMount(){
    }


    setSelected(){
        this.props.dispatch(selectTodo({id: this.props.id}));
    }

    completeTodo(){
        this.props.dispatch(toggleTodo({id: this.props.id}));
    }

    deletePressed(){
        this.props.dispatch(deleteTodo({id: this.props.id}));
    }

    render(){
        return (
            <Card style={{flexDirection: 'row', maxWidth: '100%'}}>
                <CardContent style={{flexDirection: 'row', display: 'flex'}}>
                    <IconButton aria-label="ExpandMore" style={{marginRight: 'auto', marginTop: 'auto'}} onClick={()=>this.setSelected()}>
                        <ExpandMore />
                    </IconButton>
                    <Typography variant="h6" style={{marginRight: 'left', marginTop: 'auto', flexGrow: 1}} gutterBottom noWrap={true}>
                        {this.props.title}
                    </Typography>
                    <IconButton aria-label="Clear" style={{marginLeft: 'auto', marginTop: 'auto'}} onClick={()=>this.completeTodo()}>
                        <Clear />
                    </IconButton>
                    <IconButton aria-label="Delete" style={{marginRight: 'auto', marginTop: 'auto'}} onClick={()=>this.deletePressed()}>
                        <Delete />
                    </IconButton>
                </CardContent>
                <Collapse in={this.props.selected} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="body1">
                            {this.props.content}
                        </Typography>
                    </CardContent>
               </Collapse>
            </Card>
        )
    }
}

const mapStateToProps = (state) => ({
    state
});

export default connect(mapStateToProps)(CompletedTodoItem);