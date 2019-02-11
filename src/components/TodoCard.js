import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class TodoCard extends React.Component {
    render(){
        return (
            <Card>
                <CardContent>
                    <Typography variant="h5">
                        {this.props.title}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}


export default TodoCard;