import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CloseIcon extends Component {
  render() {
    const {size, color} = this.props;
    return (
      <svg
        viewBox="0 0 100 100"
        height={size}
        width={size}>
        <path
          className="GCNotification--close-icon"       d="M97.0439,2.9561c-3.9416-3.9415-10.3285-3.9415-14.2701,0l-32.7739,32.774l-32.774-32.774
        	c-3.9412-3.9415-10.3285-3.9415-14.2697,0c-3.9415,3.9415-3.9415,10.3285,0,14.27l32.774,32.774l-32.774,32.774
        	c-3.9415,3.9411-3.9415,10.3285,0,14.2696c3.9412,3.9416,10.3285,3.9416,14.2697,0l32.774-32.7739l32.7739,32.7739
        	c3.9416,3.9416,10.3285,3.9416,14.2701,0c3.9415-3.9411,3.9415-10.3285,0-14.2696l-32.774-32.774l32.774-32.774
        	C100.9854,13.2846,100.9854,6.8977,97.0439,2.9561z"/>
      </svg>
    );
  }
}

CloseIcon.propTypes = {
  size: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default CloseIcon;
