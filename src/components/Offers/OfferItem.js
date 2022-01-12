import Card from '../UI/Card'
import './OfferItem.css'

const OfferList = props => {
  return (
    <Card className='offer-list'>
      <div className='offer-list__container'>
        <li className='offer-list__item'>
          <span className='offer-list__detail'>
            <strong>Title:</strong> {props.offersArray.title}
          </span>
          <span className='offer-list__detail'>
            <strong>Description:</strong> {props.offersArray.description}
          </span>
          <span className='offer-list__detail'>
            <strong>Detail:</strong> {props.offersArray.detail}
          </span>
          <span className='offer-list__detail'>
            <strong>Price:</strong>
            {props.offersArray.price}
          </span>
        </li>
        <div className='offer__metrics'>
          <span className='offer-metrics__item'>
            Visits: {props.offersArray.metrics.visits}
          </span>
          <span className='offer-metrics__item'>
            Likes: {props.offersArray.metrics.likes}
          </span>
        </div>
        <button className='offer-list__button' onClick={props.onBackToVenues}>
          Go back to venues
        </button>
      </div>
    </Card>
  )
}
export default OfferList
