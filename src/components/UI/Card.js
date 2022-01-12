import './Card.css'

const Card = props => {
  return <ul className='card'>{props.children}</ul>
}

export default Card
