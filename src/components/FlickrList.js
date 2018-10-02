import React, { Component } from 'react';

class Flickrlist extends React.Component {
  constructor() {
    super()
  }
  render() {
		//const regex   = /(?:"[^"]*"|^[^"]*$)/;
		const { img } = this.props;
		console.log(this.props)
    return (
      <div>
			 <img src={img}/>
    	</div>
    );
  }  
}
export default Flickrlist
