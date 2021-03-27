import React from 'react';
import ParkingLotScoreCalculator from './ParkingLotScore';
import ParkingLotScore from './ParkingLotScore';

const BusinessResult = (props) => {
  return (
    <div id={props.business.id} style={{border: '1px solid gray', borderRadius: '10px', margin: '2rem', padding: '1rem', display: 'flex', justifyContent: 'space-between'}}>
      {/* todo: no inline styling */}
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <BusinessResultTitle business={props.business} />
          <BusinessMetadata business={props.business} />
          <ParkingLotScoreDisplay business={props.business} />
        </div>
      </div>
      <BusinessResultImage business={props.business} />
    </div>
  )
}

const BusinessResultImage = (props) => {
  if (props.business.image_url) {
    return (
        <img src={props.business.image_url} alt={props.business.name}
              style={{width: 'auto', height: '5rem'}}
        />
    )
  } else {
    return null;
  }
}

const BusinessResultTitle = (props) => (
        <h2 style={{marginTop: 0}}>
          <a href={props.business.url} target="_blank">
            {props.business.name}
          </a>
        </h2>
)

const ParkingLotScoreDisplay = (props) => {
  const score = ParkingLotScoreCalculator.calculateScore(props.business.review_count, props.business.rating);
  return (
    <div>
      <strong>Parking Lot Score: </strong>
      {score.toFixed(2)}
    </div>
  )
}

const BusinessMetadata = (props) => (
  <div>
    {getBusinessAddress(props.business)}
    <Divider />
    {props.business.rating} ⭐ / 5
    <Divider />
    {props.business.review_count} reviews
  </div>
);

const Divider = () => (
  <strong style={{margin: '0 0.5rem'}}> | </strong>
);

const getBusinessAddress = (business) => {
  return `${business.location.address1}, ${business.location.city} ${business.location.state} ${business.location.zip_code}`;
}

export default BusinessResult;
