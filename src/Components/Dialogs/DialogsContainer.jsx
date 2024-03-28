import React from "react";
import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContextDelete from "../../StoreContext-delete";
import {connect} from "react-redux";

const DialogsContainer1 = () => {
    // const dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    // const messagesElements = state.messagesData.map(m => <Message message={m.message} id={m.id}/>)
    // const newMessageBody = state.newMessageBody
    //
    // let newMessageElement=React.createRef()
    return   <StoreContextDelete.Consumer>{
        (store) => {
            let state = store.getState().dialogsPage
            const onSendMessageClick=()=>{
                store.dispatch(sendMessageCreator())
            }
            const onNewMessageChange=(body)=>{
                store.dispatch(updateNewMessageBodyCreator(body))
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={store.getState().dialogsPage}/>
        }
    }
        </StoreContextDelete.Consumer>
}
let mapStateToProps =(state)=>{
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody:(body)=>{
            let action = updateNewMessageBodyCreator(body)
            dispatch(action)
        },
        sendMessage:() =>{

            dispatch(sendMessageCreator())
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer


