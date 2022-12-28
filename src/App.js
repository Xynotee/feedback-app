import { useState } from 'react'
import Header from './components/Header'
import Feedbacklist from './components/Feedbacklist'
import Feedbackdata from './data/Feedbackdata'
// import FeedbackItem from './components/FeedbackItem'

function App() {
    const [feedback, setFeedback] = useState(Feedbackdata)
    return(
        <>
            <Header />
            <div className='container'>
                <Feedbacklist feedback={feedback} />
            </div>

        </>
    )
}
export default App