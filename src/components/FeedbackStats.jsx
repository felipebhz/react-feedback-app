import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
//Calc average ratings

    let average = feedback.reduce((accumulator, current) => { 
        return accumulator + current.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

  return <div className="feedback-stats">
    <h4>{feedback.length} Reviews</h4>
    <h4>Average Rating: {isNaN(average) ? ' - ' : average}</h4>
  </div>
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export
 default FeedbackStats
