import React from "react";
import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/store";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state=props.store.getState().dialogsPage
    const dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = state.messagesData.map(m => <Message message={m.message} id={m.id}/>)
    const newMessageBody = state.newMessageBody

    let newMessageElement=React.createRef()

    const onSendMessageClick=()=>{
        props.store.dispatch(sendMessageCreator())

    }
    const onNewMessageChange=(body)=>{

        props.store.dispatch(updateNewMessageBodyCreator(body))

    }
    return (<Dialogs updateNewMessageBody={onNewMessageChange}  sendMessage={onSendMessageClick}
                     dialogsPage={state}/>
    )
}
export default DialogsContainer
