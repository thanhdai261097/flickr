import React, { Component, PropTypes } from 'react';

class Search extends React.Component {
  constructor() {
    super()
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(evt) {
    evt.preventDefault();
    this.props.onClickHandler(this.refs.searchBox.value);
    //this.props.onClickHandler(this.refs.searchBox.getValue());
  }
  render() {
    return (
    <div>
        <h2>{this.props.title}</h2>
        <form>
          <div className="form-group">
            <input type="text" ref="searchBox" className="form-control" placeholder={this.props.hint} />
            <button className="btn btn-info" onClick={this.clickHandler}>{this.props.buttonTxt}</button>
          </div>
        </form>
    </div>
    );
  }  
}

Search.propTypes = {
  title: PropTypes.string,
  hint: PropTypes.string,
  buttonTxt: PropTypes.string,
  onClickHandler: PropTypes.func
};

Search.defaultProps = {
  title: 'Flickr Search',
  hint: 'Enter a Flickr Tag',
  buttonTxt: 'Search',
  onClickHandler: () => {}
};

export default Search
