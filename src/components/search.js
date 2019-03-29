import React, { Component } from "react";
import propTypes from "prop-types";

import "../styles/App.css";

class Search extends Component {
  render() {
    return (
      <section className="topsection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12 offset-md-0">
              <div id="classSearch">
                <div className="input-group col-lg-10">
                  <input
                    type="text"
                    name="search"
                    className="form-control"
                    id="search"
                    value={this.props.keyword}
                    placeholder={this.props.placeholder}
                    onChange={this.props.doSearch}
                  />
                  <div className="input-group-btn" style={{padding: "0"}}>
                    <button
                      className="btn btn-success"
                      type="submit"
                      onClick={this.props.doClickSearch}
                    >
                      <i className="glyphicon glyphicon-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Search.propTypes = {
  title: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired
};

export default Search;
