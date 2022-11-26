import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react";


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 10,
            text: 'ITEM 01 - Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
          {
            id: 2,
            rating: 9,
            text: 'ITEM 02 - Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
          {
            id: 3,
            rating: 8,
            text: 'ITEM 03 - Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    //delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }

    // update item
    const updateFeedback = (id, updItem) => {
     setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item ))
    }

    //set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item, edit: true
        })
    }


    return (
        <FeedbackContext.Provider
        value={{
            feedback, feedbackEdit, deleteFeedback, addFeedback, editFeedback, updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}



export default FeedbackContext