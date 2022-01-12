import { useState, useEffect } from 'react'

import { getLists } from '../../services/offersVenues'
import Card from '../UI/Card'
import OfferItem from '../Offers/OfferItem'
import VenueItem from './VenueItem'
import './VenueList.css'

const baseUrl = 'https://api.rodeoworld.co.uk/venues/list'

const VenuesList = props => {
  const [venues, setVenues] = useState([])
  const [offers, setOffers] = useState([])
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    getLists(baseUrl).then(venues => {
      setVenues(venues)
    })
  }, [])

  const showVenueOffers = response => {
    setOffers(response)
    setIsClicked(true)
  }

  const backToVenues = () => {
    setIsClicked(false)
  }

  return (
    <div>
      <Card className='venue-list'>
        {!isClicked &&
          venues.map(venue => (
            <VenueItem
              venuesArray={venue}
              key={venue.id}
              onShowVenueOffers={showVenueOffers}
            />
          ))}
        <button className='logout' onClick={props.onLogout}>
          Log out
        </button>
      </Card>
      {isClicked &&
        offers.map(offer => (
          <OfferItem
            onBackToVenues={backToVenues}
            key={offer.id}
            offersArray={offer}
          />
        ))}
    </div>
  )
}

export default VenuesList
