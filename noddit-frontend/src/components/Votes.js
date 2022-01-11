import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton } from '@mui/material';

export default class Vote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: this.props.count,
            lastAction: null
        };
    }

    handleUpVote = () => {
        // Hitting upVote after upVote
        if (this.state.lastAction === 'upVote') {
            this.setState({
                count: parseInt(this.state.count) - 1,
                lastAction: null
            })
        // Hitting upVote after downVote
        } else if (this.state.lastAction === 'downVote') {
            this.setState({
                count: parseInt(this.state.count) + 2,
                lastAction: 'upVote'
            })
        // Hitting upVote with no other action
        } else {
            this.setState({
                count: parseInt(this.state.count) + 1,
                lastAction: 'upVote'
            })
        }  
    }
    
    handleDownVote= () => {
        // Hitting downVote after downVote
        if (this.state.lastAction === 'downVote') {
            this.setState({
                count: parseInt(this.state.count) + 1,
                lastAction: null
            })
        // Hitting downVote after upVote
        } else if (this.state.lastAction === 'upVote') {
            this.setState({
                count: parseInt(this.state.count) - 2,
                lastAction: 'downVote'
            })
        // Hitting downVote with no other action
        } else {
            this.setState({
                count: parseInt(this.state.count) - 1,
                lastAction: 'downVote'
            })
        }  
    }

    render() {
        return (
            <div>
                <div id='Counter' style={{display: 'inline-block'}}>{this.state.count}</div>
                <IconButton onClick={this.handleUpVote}>
                    <KeyboardArrowUpIcon/>
                </IconButton>
                <IconButton onClick={this.handleDownVote}>
                    <KeyboardArrowDownIcon/>
                </IconButton>
            </div>
        )
    }
}