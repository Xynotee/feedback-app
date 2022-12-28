 // import { useState } from 'react'
 import Card from "./shared/Card"
 import PropTypes from 'prop-types'

function FeedbackItem({ item }) {
  // const [rating, setRating] = useState(7)
  // const [text, setText] = useState('sample of review')
  // const handleClick = () => {
  //   setRating((prev) => {
  //     return prev + 1
  //   })
  // }
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='txt-display'>{item.text}</div>
      {/* <button onClick={handleClick}>change</button> */}
    </Card>
  )
}
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem