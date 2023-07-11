import { Component } from 'react';
import './Destination.css'

class DestinationData extends Component{
    render(){
        return(
            <div className='destination' >
            <h1>Popular Adventures</h1>
            <p>Take a look at what we are all about</p>
            
            <div className={this.props.className}>
              <div className="des-text">
                  <h2>{this.props.heading}</h2>
                  <p>{this.props.text}</p>
              </div>
      
              <div className="image">
                  <img src="https://images.unsplash.com/photo-1623176035122-4e07bc19bab7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" alt="suswa" />
      
                  <img src="https://images.unsplash.com/photo-1589394913966-620f6216b63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="suswa" />
              </div>
            </div>
          </div>
        )
    }
}

export default DestinationData