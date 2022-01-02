import React, { Component } from 'react';
//import { useParams } from "react-router-dom";

export default class Room extends Component {
    constructor(props){
        super(props);
        this.state = {
            votesToSkip : 2,
            guestCanPause : false,
            isHost: false,
        };
        //const params = useParams();
        //console.log(params.roomCode);
        //this.roomCode = this.props.match ? this.props.match.params.roomCode: null;
        //console.log(this.props);
        //this.getRoomDetails();
    }
    
    getRoomDetails(){
        fetch('/api/get-room' + '?code=' + this.roomCode).then((response) => response.json()).then((data)=>{
            this.setState({
                votesToSkip: data.votesToSkip,
                guestCanPause: data.guestCanPause,
                isHost: data.is_host,
            });
        });
    }

    render() {
        return <div>
          <h1>Room</h1>
            {/* <h3>{this.roomCode}</h3>
            <p>Votes: {this.state.votesToSkip}</p>
            <p>Guest Can pause: {this.state.guestCanPause.toString()}</p>
            <p>Host: {this.state.isHost.toString()}</p> */}
        </div>
    }
}