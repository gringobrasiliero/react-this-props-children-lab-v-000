import React from 'react';
import ReactDOM from 'react-dom';

class ThemedDecorations extends React.Component {
  render() {
    const childrenAddClassProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme 
      
      });
    });
    
    
    return(
      <div>
            
    {childrenAddClassProp}
    </div>
    )
  }
};

export default ThemedDecorations;