const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogsData: [
        {id: 1, name: 'Piska'},
        {id: 2, name: 'chert'},
        {id: 3, name: 'Mraz'},
        {id: 4, name: 'Suka'},
        {id: 5, name: 'Osel'},
        {id: 6, name: 'idiot'},
    ],
    messages: [
        {id: 1, message: 'Piska'},
        {id: 2, message: 'chert'},
        {id: 3, message: 'Mraz'},
        {id: 4, message: 'Suka'},
        {id: 5, message: 'Osel'},
        {id: 6, message: 'idiot'},
    ],
    newMessageBody: "ть"
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            }
        default:
            return state
    }
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer