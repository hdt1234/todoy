import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Check from '@material-ui/icons/Check';
import ExpandMore from '@material-ui/icons/ExpandMore'
import { connect } from 'react-redux';
import { selectTodo } from '../actions';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class TodoItem extends React.Component {

    componentDidMount(){
    }


    setSelected(){
        this.props.dispatch(selectTodo({id: this.props.id}));
        this.setState({height: '120px'});
    }

    render(){
        return (
            <Card style={{flexDirection: 'row', maxWidth: '100%'}}>
                <CardContent style={{flexDirection: 'row', display: 'flex'}}>
                    <IconButton aria-label="ExpandMore" style={{marginRight: 'auto', marginTop: 'auto'}} onClick={()=>this.setSelected()}>
                        <ExpandMore />
                    </IconButton>
                    <Typography variant="h6" style={{marginRight: 'left', marginTop: 'auto'}} gutterBottom noWrap={true}>
                        {this.props.title}
                    </Typography>
                    <IconButton aria-label="Check" style={{marginLeft: 'auto', marginTop: 'auto'}}>
                        <Check />
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

export default connect(mapStateToProps)(TodoItem);