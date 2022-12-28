import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function Feedbacklist({ feedback }) {
      if (!feedback || feedback.length === 0){
          return <p>No feedback yet</p>
      }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}
Feedbacklist.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}

export default Feedbacklist