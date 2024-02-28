const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer=(state,action)=>{

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body
        debugger
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody
        debugger
        state.newMessageBody = ''
        state.messagesData.push({id: 7, message: body},
        )
    }
    return state
}
export default dialogsReducer