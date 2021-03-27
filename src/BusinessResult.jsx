import React from 'react';

const BusinessResult = (props) => {
  return (
    <div id={props.business.id}>
      <h2>{props.business.name}</h2>
      {/* todo: no inline styling */}
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <BusinessMetadata business={props.business} />
        <img src={props.business.image_url} alt={props.business.name}
              style={{width: 'auto', height: '5rem'}}
        />
      </div>
    </div>
  )
}

const BusinessMetadata = (props) => (
  <div>
    {getBusinessAddress(props.business)}
    <Divider />
    {props.business.rating} / 5
    <Divider />
    {props.business.review_count} reviews
  </div>
);

const Divider = () => (
  <strong> | </strong>
);

const getBusinessAddress = (business) => {
  return `${business.location.address1}, ${business.location.city} ${business.location.state} ${business.location.zip_code}`;
}

export default BusinessResult;
