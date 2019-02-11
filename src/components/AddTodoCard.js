import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import { addTodo, toggleAdd } from '../actions';
import crypto from 'crypto';

class AddTodoCard extends React.Component {

    state = {
        title: "",
        content: ""
    }

    componentDidMount(){
        this.onAddPressed = this.onAddPressed.bind(this);
        console.log(this.props)
    }

    onAddPressed(){
        crypto.randomBytes(20, (error, buffer) => {
            let id = buffer.toString('hex');
            console.log(id);
            this.props.dispatch(addTodo({id: id, content: this.state.content, title: this.state.title}));
            this.props.dispatch(toggleAdd());
            console.log(this.props);
        });
    }

    render(){
        return (
            <Card>
                <CardContent>
                    <TextField label="Title" onChange={e => this.setState({title: e.target.value})} fullWidth/>
                    <TextField label="Content" multiline onChange={e => this.setState({content: e.target.value})} fullWidth/>
                </CardContent>
                <CardActions>
                    <Button color="secondary" onClick={()=>this.onAddPressed()}>
                        ADD
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

const mapStateToProps = ({todo}) => ({
    todo
})

export default connect(mapStateToProps)(AddTodoCard);