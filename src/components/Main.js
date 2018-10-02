import React from "react"
import { bindActionCreators } from 'redux';
import { connect } from "react-redux"
import Search from './Search'
import Flickrlist from './Flickrlist'
import * as toggleactionCreators from '../actions/toggleActions'
import * as flickractionCreators from '../actions/flickrActions'


function mapStateToProps(state) {
  return {
    hidden: state.toggle.hidden,
    flickr: state.flickr.flickr,
    fetching: state.flickr.fetching
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({...toggleactionCreators, ...flickractionCreators}, dispatch)
}

class Main extends React.Component {
  
  toggleDiv() {
    this.props.toggleDiv();
  }

  fetchFlickr(tags) {
    this.props.fetchFlickr(tags);
  }

  deleteFlickr(idx, e) {
    this.props.deleteFlickr(idx)
  }

  render() {
    const { hidden, flickr, fetching } = this.props;
    const mappedFlickr = flickr.map((flickr, i) => <li key={i}><Flickrlist img={flickr.media.m} /><button className="delete-btn" onClick={this.deleteFlickr.bind(this, i)}>delete</button></li>)
    return (
      <div>
      <div className={ hidden ? null : "toggled"}>
        <h1 onClick={this.toggleDiv.bind(this)}>Toogle Me</h1>
      </div>
      <Search onClickHandler={this.fetchFlickr.bind(this)} />
      { fetching 
          ?
          <h2>Loading...</h2>
          :
          <div style={{ opacity: fetching ? 0.5 : 1 }}><ul>{mappedFlickr}</ul></div>
      }
    </div>
    )    
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Main);

