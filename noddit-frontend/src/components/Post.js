import React from 'react';
import Votes from './Votes';
import './Post.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';

export default class Post extends React.Component {

    constructor(props) {
        super(props);

        console.log(this.props);
    }

    render() {
        return (
            <Card>
                <CardHeader 
                    title={this.props.title}
                    subheader={this.props.flair}
                />
                <CardMedia
                    component="img"
                    height='500em'
                    image={this.props.src}
                    alt="Image Post"
                />
                <CardActions>
                    <Votes count={this.props.count} />
                    <Typography variant='subtitle1'>{this.props.author}</Typography>
                </CardActions>
            </Card>
            // <div>
            //     <img id='PostImage' src={this.props.src} alt='postImage'/>
            //     <div id='Title'>{this.props.title}</div>
            //     <div id='Author'>Author:{this.props.author}</div>
            //     <div id='Flair'>Flair:{this.props.flair}</div>
            //     <Votes count={this.props.count}/>
            // </div>
        );
    }
}
