import React, { Component } from 'react'
class PointLight extends Component {
    render() {
        
        const { left, top, backgroundColor } = this.props;
    
        const style = {
          left: left + "%",
          top: top + "%",
          backgroundColor,
        };
    
        return (
          <div className="Point-light" style={style}></div>
        );
    }
}
export default PointLight;