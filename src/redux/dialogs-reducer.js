const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState={
    dialogsData: [
        {id: 1, name: 'Piska'},
        {id: 2, name: 'chert'},
        {id: 3, name: 'Mraz'},
        {id: 4, name: 'Suka'},
        {id: 5, name: 'Osel'},
        {id: 6, name: 'idiot'},
    ],
    messagesData: [
        {id: 1, message: 'Piska'},
        {id: 2, message: 'chert'},
        {id: 3, message: 'Mraz'},
        {id: 4, message: 'Suka'},
        {id: 5, message: 'Osel'},
        {id: 6, message: 'idiot'},
    ],
    newMessageBody: "ть"
}

const dialogsReducer=(state=initialState,action)=>{

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        return {
            ...state,
            newMessageBody: action.body
        }
    }   else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody
        return {...state,
            newMessageBody:  '',
            messagesData: [...state.messagesData,{id: 7, message: body}]
        }

    } else

    return state
}
export const sendMessageCreator=()=>({type:SEND_MESSAGE})
export const updateNewMessageBodyCreator=(body)=>({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer