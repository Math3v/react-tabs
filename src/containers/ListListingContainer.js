import React, { Component } from 'react';
import ListListing from '../components/ListListing';

const dataFromServer = {
  listingsTab1: [
    { name: 'Tab 1 Listing 1' },
    { name: 'Tab 1 Listing 2' },
  ],
  listingsTab2: [
    { name: 'Tab 2 Listing 1' },
    { name: 'Tab 2 Listing 2' },
  ]
};

class ListListingContainer extends Component {

  constructor() {
    super();
    this.state = {
      listings: []
    }
  }

  handleTabClick(tabName) {
    this.setState({
      listings: dataFromServer[tabName]
    })
  }

  render() {
    return (
      <div>
        <div className="tab">
          <button
            className="tablinks"
            onClick={this.handleTabClick.bind(this, 'listingsTab1')}>
            Tab 1
          </button>
          <button
            className="tablinks"
            onClick={this.handleTabClick.bind(this, 'listingsTab2')}>
            Tab 2
          </button>
        </div>
        
        <div className="tabcontent">
          <ListListing
            listings={this.state.listings}
          />
        </div>
      </div>
    );
  }
}

export default ListListingContainer
