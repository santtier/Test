import { getLists } from '../../services/offersVenues'
import './VenueItem.css'

const baseUrl = 'https://api.rodeoworld.co.uk/offers/list/'

const VenueItem = props => {
  const showOffers = () => {
    getLists(baseUrl + props.venuesArray.id).then(offers => {
      props.onShowVenueOffers(offers)
    })
  }

  return (
    <div className='venue-list__container'>
      <li className='venue-list__item'>
        <div className='venue-list__detail-container'>
          <p className='venue-list__detail'>
            <strong>ID:</strong>
            {props.venuesArray.id}
          </p>
          <p className='venue-list__detail'>
            <strong>Name:</strong> {props.venuesArray.name}
          </p>
          <p className='venue-list__detail'>
            <strong>Latitude:</strong> {props.venuesArray.latitude}
          </p>
          <p className='venue-list__detail'>
            <strong>Longitude:</strong> {props.venuesArray.longitude}
          </p>
        </div>
      </li>
      <button className='venue-list__button' onClick={showOffers}>
        Offers of this venue
      </button>
    </div>
  )
}

export default VenueItem
