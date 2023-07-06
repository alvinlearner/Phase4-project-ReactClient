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
                  <img src={this.props.img1} alt="suswa" />
      
                  <img src={this.props.img2} alt="suswa" />
              </div>
            </div>
          </div>
        )
    }
}

export default DestinationData