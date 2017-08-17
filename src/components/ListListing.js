import React from 'react';

const ListListing = ({
  listings
}) => (
  <ul>
    {listings.map(listing => {
      return (
        <li key={listing.name}>
          {listing.name}
        </li>
      );
    })}
  </ul>
);

export default ListListing;
